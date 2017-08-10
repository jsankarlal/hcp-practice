var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/home.html');
});

app.use('/', express.static(__dirname + '/'));

app.listen(9000, function () {
  console.log('app listening on port 9000!');
});