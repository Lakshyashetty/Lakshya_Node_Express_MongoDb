const express=require("express");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
   res.end("Hello Lakshya");
    
});

app.post("/add",(req,res)=>{
const data=req.body;
console.log(data);
res.json(data);

});


    
app.listen(5000,()=>{
    console.log("Running....");
    
});