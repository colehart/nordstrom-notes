"use strict";

var AWS = require('aws-sdk');

// Get "Hello" Dynamo table name.  Replace DEFAULT_VALUE
// with the actual table name from your stack.
const notesDBArn = process.env['TABLE_NAME'] || 'Notes';
const notesDBArnArr = notesDBArn.split('/');
const notesTableName = notesDBArnArr[notesDBArnArr.length - 1];

// handleHttpRequest is the entry point for Lambda requests
exports.handleHttpRequest = function(request, context, done) {
  try {
    const userId = request.pathParameters.userId;
    let response = {
      headers: {},
      body: '',
      statusCode: 200
    };

    switch (request.httpMethod) {
      case 'GET': {
        console.log('GET');
        let dynamo = new AWS.DynamoDB();
        var params = {
          TableName: notesTableName,
          Key: { 'user_id' : { S: userId } },
          ProjectionExpression: 'email'
        };
        // Call DynamoDB to read the item from the table
        dynamo.getItem(params, function(err, data) {
          if (err) {
            console.log("Error", err);
            throw `Dynamo Get Error (${err})`
          } else {
            console.log("Success", data.Item.email);
            response.body = JSON.stringify(data.Item.email);
            done(null, response);
          }
        });
        break;
      }
      case 'POST': {
        console.log('POST');
        let bodyJSON = JSON.parse(request.body || '{}');
        let dynamo = new AWS.DynamoDB();
        let params = {
          TableName: notesTableName,
          Item: {
            'Note': { S: userId },
            'Tag': { S: bodyJSON['email'] }
          }
        };
        dynamo.putItem(params, function(error, data) {
          if (error) throw `Dynamo Error (${error})`;
          else done(null, response);
        })
        break;
      }
    }
  } catch (e) {
    done(e, null);
  }
}