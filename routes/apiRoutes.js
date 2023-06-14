// Import express module
const express = require('express');
// Created new router using the express router
const router = express.Router();

// Initialized an empty array to store notes
let notes = [];

// Defined GET route handler for the /notes endpoint
router.get('/notes', (req, res) => {
  // Send notes array as JSON response
  res.json(notes);
});

// Defined POST route for the /notes endpoint
router.post('/notes', (req, res) => {
  // Gets note data from the request body
  const newNote = req.body;
  // Adds new note to the notes array
  notes.push(newNote);
  // Sends new note as a JSON response
  res.json(newNote);
});

// Exports the router object avaiable to use in other files
module.exports = router;
