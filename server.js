// Import Packages
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

// Set Default Port
const port = process.env.PORT || 3001;

// Instantiate Express App
const app = express();

// Set Express Middleware
app.use(logger("dev"));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Static Assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send Requests to React App
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });