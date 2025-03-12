const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const mailUtil = require("../utils/MailUtil");

const addUser = async(req,res)=>{

    const savedUser = await userModel.create(req.body)
    res.json({
        message:"User created successfully..",
        data:savedUser
    })

}

const getAllUser = async(req,res)=>{
    const users = await userModel.find().populate("roleId")
    res.json({
        message:"All users Fetched successfully..",
        data:users
    })
}

const deleteUserById = async(req,res)=>{
    const deletedUser = await userModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"User deleted successfully..",
        data:deletedUser
    })
}

const getUserById = async(req,res)=>{
    const UserById = await userModel.findById(req.params.id)
    res.json({
        message:"User get by id successfully..",
        data:UserById
    })
}

const signup = async(req,res)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password,salt);
        req.body.password = hashedPassword

        const createdUser = await userModel.create(req.body);
        const response = await mailUtil.sendingMail(createdUser.email,"hello varun bhatiya","hii only for test")
        res.json({
            message:"User created successfully..",
            data:createdUser
        })
    }catch(err){
        res.status(500).json({
            message:"Server error",
            data:err
        })
    }
}

const login = async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const foundUserByEmail = await userModel.findOne({email:email}).populate("roleId")
    console.log(foundUserByEmail);
    
    
    if(foundUserByEmail != null)
    {
        const isMatch = bcrypt.compareSync(password , foundUserByEmail.password);

        if(isMatch){
            res.status(200).json({
                message:"Login successfully..",
                data:foundUserByEmail
            })
        }
        else{
            res.status(404).json({
                message:"invalid password.."
            })
        }
    }
    else{
        res.status(404).json({
            message:"Email not found",
        })
    }
}

module.exports = {
    addUser,getAllUser,deleteUserById,getUserById,signup,login
}