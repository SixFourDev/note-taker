// Import express module
const express = require('express');
// Created new router using the express router
const router = express.Router();
// Import uniqid module
const uniqid = require('uniqid');

// Initialized an empty array to store notes
let notes = [];

// Defined GET route handler for the /notes endpoint
router.get('/notes', (req, res) => {
  // Send notes array as JSON response
  res.json(notes);
});

// Defined POST route for the /notes endpoint
router.post('/notes', (req, res) => {
  const newNote = {
    id: uniqid(), // Generate unique ID for the note
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(newNote);
  res.json(newNote);
});

// Defined DELETE route for the /notes/:id endpoint
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;

  // Find the index of the note with the given id
  const index = notes.findIndex((note) => note.id === noteId);

  if (index !== -1) {
    // Remove the note from the array
    notes.splice(index, 1);

    res.json({ message: 'Note deleted successfully' });
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

// Exports the router object available to use in other files
module.exports = router;
