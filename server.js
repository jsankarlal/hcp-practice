var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/header-footer.html');
});

app.use('/', express.static(__dirname + '/'));

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});