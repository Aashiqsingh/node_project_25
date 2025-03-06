const cityModel = require('../models/cityModel');

const addCity = async(req,res)=>{
    try{
        const savedCity = await cityModel.create(req.body);
        res.status(201).json({
            message:"City saved successfully..",
            data: savedCity
        })
    }catch(err){
        res.status(500).json({
            message:"Error saving city",
            error: err.message
        })
    }
}

const getAllCity = async(req,res)=>{
    try{
        const allCities = await cityModel.find();
        res.status(200).json({
            message:"All cities fetched successfully..",
            data: allCities
        })
    }catch(err){
        res.status(500).json({
            message:"Error fetching cities",
            error: err.message
        })
    }
}

const getCityByStateId = async(req,res)=>{
    try{
        const cities = await cityModel.find({stateId : req.params.stateId});
        res.status(200).json({
            message:"city found ",
            data: cities
        })
    }catch(err){
        res.status(500).json({
            message:"Error fetching cities by state id",
            error: err.message
        })
    }
}

module.exports = {
    addCity,getAllCity,getCityByStateId
}