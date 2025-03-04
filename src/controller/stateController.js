const stateModel = require("../models/stateModel");

const addState = async(req,res)=>{

    try{

        const savedState = await stateModel.create(req.body);
        res.status(201).send({
            message:"State added successfully",
            data:savedState
        })

    }catch(err){
        res.status(500).json({
            message:"Error while adding state",
            data:err
        })
    }

}

const getAllState = async(req,res)=>{
    try{

        const state = await stateModel.find();
        res.status(200).json({
            message:"States fetched successfully",
            data:state
        })

    }catch(err){
        res.status(500).json({
            message:"Error while fetching states",
            data:err
        })
    }
}

module.exports = {
    addState,
    getAllState
 
}