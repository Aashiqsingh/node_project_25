const roleModel = require("../models/roleModel")

const getAllUser = async(req,res)=>{

    const roles = await roleModel.find()

    res.json({
        message: 'Get all users',
        data:roles
    })
}

module.exports = {
    getAllUser
}