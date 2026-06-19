const mongoose=require("mongoose");
const { connectDb } = require("./db");
const studSchema=mongoose.schema({
    rollNo:{
        type:Number,
        required:true
    },
    name:{
type:String,
required:true
    },
    email:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
        enum:["Java","Python","Php","Js"]
    }
})
const studModel=mongoose.model("stud",studSchema);
connectDb()
async function insertstud() {
    try {
        const data= new studModel({
            rollNo:101,
            name:"lakshya",
           email:"lakshyashetty2403@gmail.com",
           course:"Java"
        });
        const result= await data.save();
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}
insertstud()
async function displaystud() {
    try {
    const result=await studModel.find();
        console.log(result);
        
    } catch (error) {
        console.log(error);
}       
}
// displaystud();
async function updatestud() {
    try {
        await studModel.updateOne({id:101},{$set:{name:"Ashrar"}})
        console.log("Data Updated...");
        
    } catch (error) {
        console.log(error);
        
    }
}
// updatestud();
async function deletestud() {
    try {
        await studModel.deleteOne({id:101})
        console.log("Data Deleted...");
        
    } catch (error) {
        console.log(error);
        
    }
}
// deletestud();