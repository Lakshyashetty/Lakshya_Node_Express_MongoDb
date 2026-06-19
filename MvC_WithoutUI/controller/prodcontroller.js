const { json } = require("express");
const empModel = require("../model/empmodel");
const displayEmp=async(req,res)=>{
    try {
        const result=await empModel.find();
        res.json(result);
    } catch (error) {
       console.log(error);
        
    }
};
const insertEmp=async(req,res)=>{
    const data=new empModel({
        pname:req.body.pname,
        price:req.body.price,
        category:req.body.category,
    quantity:req.body.quantity

    });
    const result=await data.save();
    res.json(result)
};
const updateEmp=async(req,res)=>{
    try {   
        const result=await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true}
        );
        res.json(result);
    } catch (error) {
       console.log(error);  
    }
};
const deleteEmp=async(req,res)=>{
    try {
        const result=await empModel.findByIdAndDelete(req.params.id)
        res.json({mesage:"Data Deleted"})
    } catch (error) {
      console.log(error);
        
    }
};
const searchEmp=async(req,res)=>{
    try {
        const result=await empModel.findById(req.params.id)
        res.json(result)
    } catch (error) {
        console.log(error);
        
    }
};
module.exports={displayEmp,insertEmp,deleteEmp,updateEmp,searchEmp}