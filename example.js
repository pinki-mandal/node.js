
// cookie

 
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);





// rejex


// var express = require("express")
// var app = express()
// // other routes
// app.get("*",((req,res)=>{
//     res.send("Sorry,this is an invalid URL");
//     console.log("sorry this is wrong url")
// }));
// app.listen(3000);
// // here we use more regexes to match/validate us routes.

// var express = require('express');
// var app = express();
// //First middleware before response is sent
// app.use(((req, res, next)=>{
//    console.log("Start");
//    next();
// }));
// //Route handler
// app.get('/',((req, res, next)=>{
//    res.send("Middle");
//    next();
// }));
// app.use('/',((req, res)=>{
//    console.log('End');
// }));
// app.listen(3000);




// router

var express = require('express');
var router = express.Router();

router.get('/', ((req, res)=>{
   res.send('GET route on things.');
}));
router.post('/', ((req, res)=>{
   res.send('POST route on things.');
}));
//export this router to use in our index3.js
module.exports = router;





var express = require('express');
var app = express();
var things = require('./index3.js');
//both index.js and things.js should be in same directory
app.use('/things', things);
app.listen(3000);






const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
// here we did urlencoded and store data in json file.

var express = require('express');
var app = express();
app.get('/:id', ((req, res)=>{
   res.send('The id you specified is ' + req.params.id);
   console.log('The id you specified is ' + req.params.id)
}));
app.listen(3000);
// dynamic routes

var express = require('express');
var app = express();
app.get('/things/:name/:id', ((req, res)=>{
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
}));
app.listen(3000);
// here we put url as a routes 





var express = require('express');
var app = express();
app.get('/things/:id([0-9]{5})',((req, res)=>{
   res.send('id: ' + req.params.id);
   console.log("id:"+req.params.id);
}));
app.listen(3000);
// here we use regex and we gave id limit 5.

querystring = require('querystring');  
const obj1=querystring.parse('name=Muskan&company=Google');  
console.log(obj1);  
// here we use querystring.parse method to convert string to object.

querystring = require('querystring');  
const qs1=querystring.stringify({name:'Muskan',company:'Google'});  
console.log(qs1);  
// here we use querystring.stringify method to convert object to string .





// middleware
var express = require('express')
var app = express()
var myLogger = ((req, res, next)=>{
  console.log('LOGGED')
  next()
})
app.use(myLogger)
app.get('/',((req, res)=>{
  res.send('Hello World!')
}))
app.listen(3000);
// simple middleware 

var express = require('express')
var app = express()
var requestTime = ((req, res, next)=>{
  req.requestTime = Date.now()
  next()
})
app.use(requestTime)
app.get('/',((req, res)=>{
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
  console.log(requestTime);
}))
app.listen(3000);
// this is second middleware

var express = require('express');
var app = express();
//Middleware function to log request protocol
app.use('/things',((req, res, next)=>{
   console.log("A request for things received at " + Date.now());
   next();
}));
// Route handler that sends the response
app.get('/things',((req, res)=>{
   res.send('Things');
}));
app.listen(3000);






var express = require('express');
var app = express();
//First middleware before response is sent
app.use(((req, res, next)=>{
   console.log("Start");
   next();
}));
//Route handler
app.get('/', ((req, res, next)=>{
   res.send("Middle");
   next();
}));
app.use('/',((req, res)=>{
   console.log('End');
}));
app.listen(3000);
// order of middleware calls


var bodyParser = require('body-parser');
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json())
//here we use body-parser for handling incoming request boodies in a middleware.
var cookieParser = require('cookie-parser');
app.use(cookieParser())
// cookie-parser ,it attached to the client request object.




// host and port
var express = require('express');  
var app = express();   
app.get('/', ((req, res) =>{  
  res.send('Welcome to JavaTpoint!');  
}));  
app.get('/help', ((req, res)=> {  
  res.send('How can I help You?');  
}));  
var server = app.listen(8000,(()=>{  
  var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
}))
  







var express=require("express")
var app=express()
app.get('/',((req,res)=>{
   res.send("Hello World!")
   console.log("Hello Muskan")
}));
app.listen(3000);
// here we gave routes as '/' .

var express = require('express');
var app = express();
app.get('/hello',((req, res)=>{
   res.send("Hello World!");
   console.log("Hello Mussu")
}));
app.listen(2000);
// here we gave routes as '/hello'.

var express = require('express');
var app = express();
app.get('/hello',((req, res)=>{
   res.send("Hello World!");
   console.log("Muskan")
}));
app.post('/hello',((req, res)=>{
   res.send("You just called the post method at '/hello'!\n");
   console.log("Mickey")
}));
app.all('/test', ((req, res)=>{
    res.send("HTTP method doesn't have any effect on this route!");
    console.log("All")
 }));
app.listen(3000);
// here we use three routes for get and post we use '/hello' ,all we use '/test' routes.