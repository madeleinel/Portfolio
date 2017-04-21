var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.static('public'));

var formidable = require('express-formidable');
app.use(formidable());




app.listen(5500, function() {
  console.log('Server is listening on port 5500. Ready to accept requests!')
});
