
// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name; // Get the name parameter from the URL
  const greeting = `Hello, ${name}! It's so great to see you!`;
  res.send(greeting); // Send the greeting as the response
});

// Set up a route for the generic greeting
app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

//Tip calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
  const total = parseFloat(req.params.total); // Get the total parameter from the URL
  const tipPercentage = parseFloat(req.params.tipPercentage); // Get the tipPercentage parameter from the URL

  if (isNaN(total) || isNaN(tipPercentage)) {
    return res.status(400).send('Invalid input. Please provide valid numbers.');
  }

  const tipAmount = (total * tipPercentage) / 100;
  res.send(tipAmount.toString()); // Send the calculated tip amount as the response
});


//Magic  8 Ball



const magic8BallResponses = [
  "It is certain",
   "It is decidedly so", 
   "Without a doubt", 
   "Yes definitely",
   "You may rely on it", 
   "As I see it yes",
   "Most likely", 
   "Outlook good",
   "Yes", 
   "Signs point to yes", 
   "Reply hazy try again", 
   "Ask again later",
   "Better not tell you now", 
   "Cannot predict now", 
   "Concentrate and ask again",
   "Don't count on it",
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
  ]
;

// Set up a route for the Magic 8 Ball
app.get('/magic/:question', (req, res) => {
  const question = req.params.question.replace(/%20/g, ' '); // Replace %20 with spaces

  // Get a random response from the magic8BallResponses array
  const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];

  // Construct the HTML response
  const htmlResponse = `<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`;

  res.send(htmlResponse); // Send the HTML response as the output
});





// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

