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

// Starts the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});