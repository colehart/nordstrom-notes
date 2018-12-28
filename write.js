'use strict';

var AWS = require('aws-sdk')
  documentClient = new AWS.DynamoDB.DocumentClient();

exports.writeNote = function(event, context, callback){
  var params = {
    Item : {
      "Note" : event.note,
      "Tag" : event.tag
    },
    TableName : process.env.TABLE_NAME
  };
  documentClient.put(params, function(err, data){
    callback(err, data);
  });
}