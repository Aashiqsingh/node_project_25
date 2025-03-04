const routes = require('express').Router();
const cityController = require("../controller/cityController");

routes.post("/add",cityController.addCity);
routes.get("/get",cityController.getAllCity);

module.exports = routes