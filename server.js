// Set up Express.js and require necessary modules
const express = require('express');
const path = require('path');

// Create an instance of the Express app
const app = express();

// Define middleware to handle JSON and static file serving
app.use(express.json());
app.use(express.static('public'));