const hordingModel = require("../models/hordingModel");

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

        const getHording = await hordingModel.find().populate("stateId cityId areaId userId");
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

module.exports = {
    addHording,getAllHording
}