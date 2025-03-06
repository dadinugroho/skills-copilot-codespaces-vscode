// Create web server

// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Import the comments module
const comments = require('./comments');
// Import the body-parser module
const bodyParser = require('body-parser');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle GET requests on the root URL
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, World!');
});

// Handle GET requests on the /comments URL
app.get('/comments', (req, res) => {
  // Send a response to the client
  res.json(comments.getComments());
});

// Handle POST requests on the /comments URL
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body.comment;
  // Add the comment to the list of comments
  comments.addComment(comment);
  // Send a response to the client
  res.send('Comment added');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});