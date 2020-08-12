var express = require('express');
const bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var zlib = require('zlib');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'output')));
app.get('/', function (req, res) {
   //res.send('Hello World!!');
   res.send("/index.html")
   res.sendstatus(200)
})
app.get('/get', (req, res) => {
	// On get request URI 
})
app.post('/post', (req, res) => {
	// On post request URI
  res.sendstatus(200)
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})