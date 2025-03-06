const routes = require('express').Router();
const areaController = require('../controller/areaController');

routes.post("/add",areaController.addArea)
routes.get("/get",areaController.getAllArea)
routes.get("/getareabystate/:cityId",areaController.getAreaByState);

module.exports = routes;