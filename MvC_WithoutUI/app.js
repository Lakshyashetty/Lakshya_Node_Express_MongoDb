const { ConnectDb } = require("./db");
const router = require("./routes/prodroutes");

const express=require("express")
const app=express()
ConnectDb();
app.use(express.json())
app.use("/",router)

app.listen(4000,()=>{
console.log("Running...");

})