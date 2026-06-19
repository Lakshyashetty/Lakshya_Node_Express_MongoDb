const { Timestamp } = require("mongodb");
const mongoose=require("mongoose");
const empSchema=mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:12900,
        max:34000
    },
    category:{
        type:String,
        required:true,
        enum:["It","Acc","Sales","Hr"]
    },
    quantity:{
        type:Number,
        min:20,
        max:40
    }
},
{timestamps:true}
);
const empModel=mongoose.model("emp",empSchema);
module.exports=empModel