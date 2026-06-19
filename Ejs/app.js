const express =require("express");
const app=express();
app.set("view engine","ejs");
app.get("/card",(req,res)=>{
    const card=[{
        id:101,name:"Tv",price:34000 ,img:"https://electronicparadise.in/cdn/shop/files/SAMled.jpg?v=1701762179&width=1406"
    },{id:102,name:"Trimmer",price:4000,img:"https://zebronics.com/cdn/shop/products/ZEB-HT104-pic1.jpg?v=1635335844&width=2048"}]
    res.render("cards",{card})
});
app.get("/table",(req,res)=>{
    const table=[{
        id:101,name:"Tv",price:34000 
    },{id:102,name:"Trimmer",price:4000},
{id:103,name:"Ac",price:42000}]
    res.render("table",{table})
});

app.listen(4000,()=>{
    console.log("RUnning...");
    
})