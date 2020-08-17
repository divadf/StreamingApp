var express = require('express');
var path = require('path');
var app = express();
const PORT = 8080
//port testing

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'))
})
app.get('/get', (req, res) => {
	// On get request URI 
  res.sendFile(path.join(__dirname +'/output/output0.ts'))
  
})
app.get('/get/m3u8', (req, res) => {
	// On post request URI
  res.sendFile(path.join(__dirname+'/output/output.m3u8'))
})
app.get('/get/mp4', (req, res) => {
	// On post request URI
  res.sendFile("/home/runner/StreamingApp-2/IMG_1110.mp4")
})
var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

