const hordingModel = require("../models/hordingModel");
const multer = require("multer");
const path = require("path");
const cloudinaryUtil = require("../utils/CloudinaryUtil");


const storage = multer.diskStorage({
    destination:"./upload",
    filename:function (req,file,cb){
        cb(null,file.originalname);
    },
})

const upload = multer({
    storage:storage,
}).single("image")


const addHording = async(req,res)=>{
    try{
        const savedHording = await hordingModel.create(req.body);
        res.status(201).json({
            message: "Hording added successfully",
            data: savedHording
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

const getAllHording = async(req,res)=>{
    try{

        const getHording = await hordingModel.find()
        res.status(200).json({
            message: "All hording data",
            data: getHording
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

// const addHordingWithFile = async(req,res)=>{
//     upload(req,res,(err)=>{
//         if(err){
//             res.status(500).json({
//                 message: "Error in file upload"
//             })
//         }
//         else{
//             console.log(req.body);
//             res.status(200).json({
//                 message:"File uploaded successfully..",
//                 data:req.file
//             })
            
//         }
//     })
// }

const addHordingWithFile = async(req,res)=>{
    upload(req,res,async(err)=>{
        if(err){
            res.status(500).json({
                message: "Error in file upload"
            })
        }
        else{
            
            const cloudinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file)
            console.log(cloudinaryResponse);

            req.body.hordingURL = cloudinaryResponse.secure_url;
            const savedHording = await hordingModel.create(req.body);

            res.status(200).json({
                message:"File uploaded successfully..",
                data:savedHording
            })
            
        }
    })
}

const getHordingByUserId = async(req,res)=>{
    try{
        const Hordings = await hordingModel.find({userId:req.params.userId}).populate("stateId cityId areaId userId")
        res.status(200).json({
            message: "Hording data by user",
            data: Hordings
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


module.exports = {
    addHording,getAllHording,addHordingWithFile,getHordingByUserId
}