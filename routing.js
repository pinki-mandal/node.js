
const express = require('express')
const app = express()
const port=8000;

app.get('/', function (req, res) {
  console.log("here")
  res.send('welcome to pinki channel')
});

// app.get('/about', function (req, res) {
//   console.log("here")
//   res.status(200).send('my name is pinki.');
// });

// app.get('/contact', function (req, res) {
//   console.log("here")
//   res.send('plz contact us')
// });

// app.listen(port,()=>{
//   console.log(`the pinki ${port}`)
// });




                           //  get
// var express = require('express')
// var app = express()

// app.get('/', function(req, res) {
//     res.send('Hello Sir')
// })
// app.listen(3000)


                          //  port 
// var express = require('express')
// var app = express()

// app.post('/', function(req, res) {
//     res.send('Hello Sir')
// })
// app.listen(8000)




//                      without using framework
// var http = require('http');
// http.createServer(function (req, res) {
//   res.write('Hello World!'); // Write a response
//   res.end(); // End the response
// }).listen(3000, function() {
//   console.log("server start at port 3000"); // The server object listens on port 3000
// });









// without using framework
var http = require('http');
http.createServer(function (req, res) {
  var url = req.url;
  if(url ==='/about') {
    res.write(' Welcome to about us page'); 
    res.end(); 
  } else if(url ==='/contact') {
    res.write(' Welcome to contact us page'); 
    res.end(); 
  } else {
    res.write('Hello World!'); 
    res.end(); 
  }
}).listen(3000, function() {
    console.log("server start at port 3000"); // The server object listens on port 3000
});
