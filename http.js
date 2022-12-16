var express=require("express")
var app=express()

app.get("/",function(req,res){
    res.send("this method is used for get only");

})
app.post("/",function(req,res){
    res.send("this method is used for post only");
})

app.put("/",function(req,res){
    res.send("this method is used for put only");
})
app.delete("/",function(req,res){
    res.send("this method is used for delete only");
})
app.listen(7000);
