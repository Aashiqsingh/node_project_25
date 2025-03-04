const areaModel = require("../models/areaModel");

const addArea = async(req,res)=>{
    try{

        const savedArea = await areaModel.create(req.body);
        res.status(201).json({
            message: "Area added successfully",
            data: savedArea
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllArea = async(req,res)=>{
    try{

        const allAreas = await areaModel.find();
        res.json({
            message: "All areas fetched successfully",
            data: allAreas
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    addArea,getAllArea
}