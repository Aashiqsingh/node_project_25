const routes = require('express').Router();
const hordingController = require('../controller/hordingController');

routes.post('/add',hordingController.addHording);
routes.get("/get",hordingController.getAllHording);

module.exports = routes