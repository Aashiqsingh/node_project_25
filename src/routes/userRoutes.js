const routes = require("express").Router();
const userController = require("../controller/userController")

routes.post("/user",userController.addUser)
routes.get("/users",userController.getAllUser);
routes.delete("/user/:id",userController.deleteUserById)
routes.get("/user/:id",userController.getUserById);
routes.post("/user/signup",userController.signup)
routes.post("/user/login",userController.login)


module.exports = routes;