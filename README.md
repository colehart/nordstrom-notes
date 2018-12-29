[![Waffle.io - Columns and their card count](https://badge.waffle.io/colehart/nordstrom-notes.svg?columns=all)](https://waffle.io/colehart/nordstrom-notes)

# Nordstrom Notes

## A React and Node.js app to help you keep track of your notes.

## How to Use

### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

## See it live
![A screen recording of the app](https://github.com/colehart/nordstrom-notes/blob/master/src/assets/images/screenRecording.gif "App Screen Recording")

## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other technologies used:
- React
- React Router
- Redux
- Redux Thunks

Tested with:
- Jest
- Enzyme

API created with:
- AWS API Gateway
- AWS Lambda
- AWS Dynamo DB
<!--
Deployed with:
- Serverless.js -->

## Project Requirements
> Build a simple note taking app which consists of two views:
>   1. A form/set of inputs that collects two pieces of information.
>     • A text input to a max of 250 characters.
>     • A dropdown called “Tags” which contains three options: Work, Personal, Hobby
>   2. All of the notes you have already written are shown in a list, which can be filtered by date and tag. These can be filtered on the front-end, or through the API layer, whatever you prefer.

![Provided Schema Design](https://github.com/colehart/nordstrom-notes/blob/master/src/assets/images/system-design.png "Provided Schema Design")

## Wireframes
Nordstrom Notes is a single page web app with a Take Note view to create a new note and a Notable Notes view to see all your notes.

### Take Note View - 'http://localhost:3000/'
![Take Note Page](https://github.com/colehart/nordstrom-notes/blob/master/src/assets/images/take-note.png "Take Note Wireframe")

### Notable Notes View - 'http://localhost:3000/notes'
![Notable Notes Page](https://github.com/colehart/nordstrom-notes/blob/master/src/assets/images/notable-notes.png "Notable Notes Wireframe")

Thanks for the opportunity to learn about AWS and Serverless!