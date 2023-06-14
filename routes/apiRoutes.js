const express = require('express');
const router = express.Router();

let notes = [];

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  res.json(newNote);
});

module.exports = router;
