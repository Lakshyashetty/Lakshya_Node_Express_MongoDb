const express=require("express");
const { displayEmp, insertEmp, updateEmp, deleteEmp, searchEmp } = require("../controller/prodcontroller");
const router=express.Router();
router.get("/",displayEmp);
router.post("/add",insertEmp);
router.patch("/update/:id",updateEmp);
router.delete("/delete/:id",deleteEmp);
router.get("/search/:id",searchEmp);
module.exports=router;