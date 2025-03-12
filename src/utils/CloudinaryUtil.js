const cloudinary = require('cloudinary');

const uploadFileToCloudinary = async(file)=>{

    cloudinary.config({
        cloud_name:"ddtwfog9c",
        api_key:"351452617624124",
        api_secret:"2Y_ezMtJGJsSP6loy50OaH5ZA1w"
    })

    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);
    return cloudinaryResponse;
}

module.exports = {
    uploadFileToCloudinary
};