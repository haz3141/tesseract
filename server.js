// Package Imports
const express = require('express');
const path = require('path');

// Set Default Port
const PORT = process.env.PORT || 3001;

// Instantiate Express
const app = express();

// Set Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Send Requests to React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🌎Server is running on: ${PORT}🌎`);
});
