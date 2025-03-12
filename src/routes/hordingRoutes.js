const routes = require('express').Router();
const hordingController = require('../controller/hordingController');

routes.post('/add',hordingController.addHording);
routes.get("/get",hordingController.getAllHording);
routes.post("/addWithFile",hordingController.addHordingWithFile);
routes.get("/getHordingsbyuserid/:userId",hordingController.getHordingByUserId)

module.exports = routes