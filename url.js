// const express=require("express")
// const app=express();

// app.get('/',function (req,res){
//     console.log("here")
//     res.send("hello i am pinki");

// })
// app.listen(5000)







// const express=require("express")
// const app=express();


// app.get('/',function(req,res){
//     res.send("hello i am pinki")
// })

// app.get('/profile/:id',function(req,res){
//     res.send("profile:id"+req.params.id)
// })

// app.listen(5000)





// const express=require("express")
// const app=express();


// app.get('/',function(req,res){
//     res.send("hello i am pinki")
// })

// app.get('/:course_name/courses/:id',function(req,res){
//     res.send("Course Name : " + req.params.course_name+", ID: "+req.params.id)
// })

// app.listen(5000)







const express=require("express")
const app=express();


app.get('/',function(req,res){
    res.send("hello i am pinki")
})

app.get('/message/:phone_number([0-9]{10})',function(req,res){
    res.send("message  to" + req.params.phone_number)
})

app.get("*",function(req,res){
    res.send("page  not found ")
})
app.listen(5000)