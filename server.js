
// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name; // Get the name parameter from the URL
  const greeting = `Hello, ${name}! It's so great to see you!`;
  res.send(greeting); // Send the greeting as the response
});

// Set up a route for the generic greeting
app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

app.get('/Home', function(req, res) {
  res.send('<h1>Home</h1>');
})

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

