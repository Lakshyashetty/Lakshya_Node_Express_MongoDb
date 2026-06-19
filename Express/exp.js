const express=require("express");
const app=express()
const path=require("path")
app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","home.html"))
});
app.use("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"));

});
app.use("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact.html"))
});
app.listen(4000,()=>{
    console.log("Running....");
    
})