var express=require("express");
var app=express()

// app.use(express.static(_dirname+"/public"));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.get("/",function(req,res){
    res.send("get is called")
})
app.listen(3000)