var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var fs = require('fs');
  var hostfile = fs.readFileSync('index.html', 'utf-8');  
  response.send(hostfile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
