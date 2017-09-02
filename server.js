'use strict';

const express = require('express'),
      app = express(),
      port = process.env.PORT || 5500;

app.set('view engine', 'pug'); // Define the templating engine
app.use(express.static(__dirname + '/public')); // Tell express where to find static files, such as images
require(__dirname + '/routes.js')(app); // Import the routes and pass them the app

if (!module.parent) { // Only start the server when this file is being run directly
  app.listen(port, () => {
    console.log('Server is ready on ' + port);
  });
}

module.exports = app;
