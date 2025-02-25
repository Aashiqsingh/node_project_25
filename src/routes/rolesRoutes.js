const routes = require("express").Router();

const roleController = require("../controller/rolesController");

routes.get("/roles",roleController.getAllUser)

module.exports = routes