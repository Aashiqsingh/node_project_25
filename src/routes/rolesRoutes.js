const routes = require("express").Router();

const roleController = require("../controller/rolesController");

routes.get("/roles",roleController.getAllUser)
routes.post("/role",roleController.addRole)
routes.delete("/role/:id",roleController.deleteRole)
routes.get("/role/:id",roleController.getRoleById)


module.exports = routes