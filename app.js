const express = require('express');
const app = express();

app.get("/test",(req,res)=>{
    // console.log("test function called...");
    res.send("test function called....");
    
})

app.get("/users",(req,res)=>{

    res.json({
        message:"Data fetched successfully..",
        data:["rahul","aman","rohan"]
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/")



// Port connected on port no : 3000
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server start in Port ${PORT}`);
    
})