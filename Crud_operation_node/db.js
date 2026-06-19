const mongoose=require("mongoose")
const ConnectDb=()=>{
    mongoose.connect("mongodb://localhost:27017/node_crud").then(() => {
        console.log("COnnected....");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports={ConnectDb}