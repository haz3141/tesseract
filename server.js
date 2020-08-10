// Package Imports
const express = require("express");
const path = require("path");

// Set Default Port
const PORT = process.env.PORT || 3001;

// Instantiate Express
const app = express();

// Set Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes
app.get("/api/hello", (req, res) => {
  res.status(200).json({
    success: true,
    status: "HTTP Status 200 (OK)",
    message: "GET was Received",
  });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    status: "HTTP Status 200 (OK)",
    message: `POST was Received: ${req.body.post}`,
  });
});

// Send Requests to React App
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🌎Server is running on: ${PORT}🌎`);
});
