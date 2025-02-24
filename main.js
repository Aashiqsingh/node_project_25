console.log("Main function called...");

var userName = "jutin";
var userAge = 24;


function getAllUser(){
    console.log("Getting all users...");
    
}


// module.exports = userName
// module.exports = userAge

module.exports = {
    userName,
    userAge,
    getAllUser
}