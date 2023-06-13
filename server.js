// Set up Express.js and require necessary modules
const express = require('express');
const path = require('path');
// Port number
const port = 3000;

// Create an instance of the Express app
const app = express();

// Define middleware to handle JSON and static file serving
app.use(express.json());
app.use(express.static('public'));

// Set up routes to handle requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Create a new array to store the notes
let notes = [];

// Handle get requests and returning the notes array as a JSON
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Handle receiving new notes, pushing them to the notes array and returning new note as json
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  res.json(newNote);
});

// Starts the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});