// Package Imports
const express = require("express");

// Set Default Port
const PORT = process.env.PORT || 3001;

// Instantiate Express
const app = express();

// Set Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start Express Server
app.listen(PORT, function () {
  console.log(`🌎Server is running on: ${PORT}🌎`);
});
