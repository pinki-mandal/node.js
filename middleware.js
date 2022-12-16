// how to create middleware function

// const express=require("express")
// const app=express()

// function loginfo(req,res,next){
//     console.log("hello guys .middleware().....")
//     next()
// }
// function adddata(req,res,next){
//     var person={
//         name:"pinki",
//         city:"delhi",
//     }
//     req.person=person;
//     next()
// }

// app.use(loginfo)
// app.use(adddata)



// app.get('/',function(req,res){
//     res.send("hello i am pinki")
// });

// app.get('/person',function(req,res){
//     res.send("Name :"+req.person.name +"City :"+ req.person.city)
// });


// app.listen(3000)






// const express = require('express')
// const app = express()

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(3000)



// middleware

// const express=require("express")
// const app=express()

// const middleware=(req,res,next)=>{
//     console.log("middleware(): ....")
//     next()
// }
// app.use(middleware)
// app.listen(6000)


// const express=require("express")
// const app=express()

// const filterres=(req,res,next)=>{
//     if (!req.query.age){
//         res.send("please provide age")
//     }
//     else if (req.query.age<18){
//         res.send("you cannot access this page")
//     }
//     else{
//         next()
//     }
// }
// app.use(filterres)

// app.get('/', (req, res) => {
//   res.send('home page')
// })

// app.listen(3000)



// const express=require("express")
// const reqfilter=require('./middleware')
// const app=express()
// const route=express.Router();

// route.use(reqfilter)
// app.get('/',(req,res)=>{
//     res.send("welcome to home page")
// })
// app.get('/about',reqfilter,(req,res)=>{
//     res.send("welcome to home page")
// });
// app.get('/contact',reqfilter,(req,res)=>{
//     res.send("welcome to home page")
// })
// route.get('/',(req,res)=>{
//     res.send("welcome to home page")
// })
// app.listen(8000)


// var express = require('express');
// var app = express();

// //First middleware before response is sent
// app.use(function(req, res, next){
//    console.log("Start");
//    next();
// });

// //Route handler
// app.get('/', function(req, res, next){
//    res.send("Middle");
//    next();
// });

// app.use('/', function(req, res){
//    console.log('End');
// });

// app.listen(1000);

