// Importing necessary modules
const express = require('express');

// Creating an instance of express app
const app = express();
const port = 3001; // Port number

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Route to handle POST requests to '/welcome'
app.post('/welcome', (req, res) => {
  // Extracting name from request body
  const { name } = req.body;

  // Checking if name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Sending a welcome message with the provided name
  res.send(`Welcome, ${name}!`);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
