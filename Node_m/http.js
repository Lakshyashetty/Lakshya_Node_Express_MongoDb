const http = require("http");
const path=require("path");
const server=http.createServer((req,res)=>{
let path="./views/"
switch (req.url) {

    case "/":
        path+="home.html"
        break;

    default:
        path+="error.html"
        break;
}
server.listen(4000,()=>{
    console.log("Running...");
    
})
})