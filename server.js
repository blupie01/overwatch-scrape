// NPM Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// NPM Dependencies for scraping
var request = require('request');
var cheerio = require('cheerio');

// Require Models
var Article = require('./models/Article.js');
var Note = require('./models/Note.js');

// Set mongoose to leverage built in ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use body-parser with app
app.use(bodyParser.urlencoded({
	extended: true
}));

// Make public a static directory
app.use(express.static('public'));

// Database configuration with mongoose
mongoose.connect('mongodb://localhost/overwatch-scrape');
var db = mongoose.connection;

// Show mongoose errors
db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

// Log success message once logged in to db through mongoose
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// ------------------------------------------------------------------
// ROUTES -----------------------------------------------------------
// ------------------------------------------------------------------


// GET request to scrape /r overwatch
app.get('/scrape', function(req, res) {

});