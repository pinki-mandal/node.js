// const http=require("http");

// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end("hello the thapa ")
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port")
// });




const http=require("http");

const server=http.createServer((req,res)=>{

    if (req.url=="/"){
        res.end("hello the server page ")
    }
    else if (req.url=="/about"){
        res.end("hello the about page thapa ")
    }
    else if (req.url=="/contact"){
        res.end("<h1>hello the contact page thapa </h1>")
    }
    else{
        res.writeHead(404)
        res.end("404 page is not found")
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port")
});