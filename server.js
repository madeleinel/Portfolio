var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.static('public'));

// var formidable = require('express-formidable');
// app.use(formidable());

app.get('/', function (request, response) {
  response.send('Landing page');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/public/about.html');
});

app.get('/portfolio', function (request, response) {
  response.sendFile(__dirname + '/public/portfolio.html');
});

app.get('/contact', function (request, response) {
  response.sendFile(__dirname + '/public/contact.html');
});

app.listen(5500, function() {
  console.log('Server is listening on port 5500. Ready to accept requests!')
});
