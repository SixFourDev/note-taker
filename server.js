// Import Express module
const express = require('express');
// Import path module
const path = require('path');
// Import htmlRoutes module
const htmlRoutes = require('./routes/htmlRoutes');
// Import apiRoutes module
const apiRoutes = require('./routes/apiRoutes');

// Create instance of the express app
const app = express();
// Defines Port number
const PORT = process.env.PORT || 3000;

// Add middleware to app
app.use(express.json());
app.use(express.static('public'));

// Grabs the router middleware for the / path
app.use('/', htmlRoutes);
// Grabs the router middleware for the /api path
app.use('/api', apiRoutes);

// Starts the server and listens for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
