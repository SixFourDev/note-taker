// Import Express module
const express = require('express');
// Import path module for working with file and idrectory paths
const path = require('path');
// Created new router object
const router = express.Router();

// GET route handler for the / endpoint
router.get('/', (req, res) => {
  // Send the index.html file as the response
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET route hnadler for the /notes endpoint
router.get('/notes', (req, res) => {
  // Send the notes.html file as the response
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Exports the router object avaiable to use in other files
module.exports = router;
