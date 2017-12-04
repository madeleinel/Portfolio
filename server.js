// Portfolio site - Version 1

var express = require('express');
var app = express();
app.use(express.static('public'));

var port = process.env.PORT || 5500;

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/public/about.html');
});

app.get('/portfolio', function (request, response) {
  response.sendFile(__dirname + '/public/portfolio.html');
});

app.listen(port, function() {
  console.log('Server is listening on port 5500. Ready to accept requests!')
});

// app.get('/testing', function (request, response) {
//   response.sendFile(__dirname + '/public/wrapper.html');
// });
