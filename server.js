// Server for Pizza Hunt
// Dependencies
// Express.js
const express = require('express');
// Mongoose ORM for MongoDB
const mongoose = require('mongoose');

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON and string parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware to serve the public folders as static files
app.use(express.static('public'));
// Middleware for the routes for html and API
app.use(require('./routes'));

// Mongoose database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log the mongo queries being executed
mongoose.set('debug', true);

// Open a port for the server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
