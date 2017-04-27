var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.static('public'));

var port = process.env.PORT || 5500;

// var formidable = require('express-formidable');
// app.use(formidable());
// What was this used for in the Node Girls express workshop?

// var view = require(__dirname + '/views/view.js');

app.get('/', function (request, response) {
  // response.sendFile(__dirname + '/public/index.html'); // Redundant code
});

app.get('/testing', function (request, response) {
  response.sendFile(__dirname + '/public/wrapper.html');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/public/about.html');
});

app.get('/portfolio', function (request, response) {
  response.sendFile(__dirname + '/public/portfolio.html');
});

app.listen(port, function() {
  console.log('Server is listening on port 5500. Ready to accept requests!')
});
