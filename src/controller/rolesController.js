const roleModel = require("../models/roleModel")

const getAllUser = async(req,res)=>{

    const roles = await roleModel.find()

    res.json({
        message: 'Get all users',
        data:roles
    })
}

const addRole = async(req,res)=>{

    const newRoll = await roleModel.create(req.body);
    console.log(newRoll);
    
    if(newRoll)
    {
        res.json({
            message: 'Role added successfully',
            data: newRoll
        })
    }
}

const deleteRole = async(req,res)=>{
    const deletedRole = await roleModel.findByIdAndDelete(req.params.id);

    res.json({
        message:"Role deleted successfully",
        data:deletedRole
    })
}

const getRoleById = async(req,res)=>{
    const getRole = await roleModel.findById(req.params.id);

    res.json({
        message: 'Get role by id',
        data: getRole
    })
}

module.exports = {
    getAllUser,addRole,deleteRole,getRoleById
}