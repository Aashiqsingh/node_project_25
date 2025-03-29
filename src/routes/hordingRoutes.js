const routes = require('express').Router();
const hordingController = require('../controller/hordingController');

routes.post('/add',hordingController.addHording);
routes.get("/get",hordingController.getAllHording);
routes.post("/addWithFile",hordingController.addHordingWithFile);
routes.get("/getHordingsbyuserid/:userId",hordingController.getHordingByUserId)
routes.put("/updatehordingbyid/:id",hordingController.updateHording);
routes.get("/gethordingbyid/:id",hordingController.getHordingById);

module.exports = routes