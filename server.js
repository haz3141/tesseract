// Manage Environment Variables
require("dotenv").config();

// Package Imports
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
const session = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
const passport = require("passport");
const router = express.Router();

// Local Imports
const db = require("./server/database");
const User = require("./server/models/user-model");
const authRouter = require("./server/routes/auth-router");

// Set Default Port
const PORT = process.env.PORT || 3001;

// Instantiate Express App
const app = express();

// Set Express Middleware
app.use(logger("dev"));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Serve Static Assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to Database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
app.use("/auth", authRouter);

// Send Requests to React App
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start Express Server
app.listen(PORT, function () {
  console.log(`🌎Server is running on: ${PORT}🌎`);
});
