const routes = require('express').Router();
const stateController = require("../controller/stateController");

routes.post("/addState",stateController.addState);
routes.get("/getState",stateController.getAllState);

module.exports = routes;