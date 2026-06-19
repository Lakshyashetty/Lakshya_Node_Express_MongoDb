const { error } = require("console");
const fs=require("fs"); 
// fs.readFile("./text.txt",(err,data)=>{
//     if (err) {
//      console.log(err);
        
//     }
//     else{
//         console.log(data.toString());
        
//     }
// })
const data="\n How are you ?";
fs.writeFile("./text2.txt",data,(err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("Data wwritten");
        
    }
})
// fs.appendFile("./text2.txt",data,(err)=>{
//     if (err) {
//        console.log(err);
        
//     }else{
//         console.log("Data Append Successfully");
        
//     }
// })

// fs.unlink("./text.txt",(err)=>{
// if (err) {
//     console.log(err);
    
// }else{
//     console.log("Data Deleted");
    
// }
// })


