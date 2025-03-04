const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const roleRoutes = require("./src/routes/rolesRoutes")
app.use(roleRoutes);

const userRoutes = require("./src/routes/userRoutes")
app.use(userRoutes);

const stateRoutes = require("./src/routes/stateRoutes");
app.use('/state', stateRoutes)

const cityRoutes = require("./src/routes/cityRoutes");
app.use('/city', cityRoutes)

const areaRoutes = require("./src/routes/areaRoutes");
app.use('/area', areaRoutes)

const hordingRoutes = require("./src/routes/hordingRoutes");
app.use('/hording', hordingRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/25_node_project").then(()=>{
    console.log("Database connection established..");
    
}).catch(()=>{
    console.log("Failed to connect to database..");
 
})



// Port connected on port no : 3000
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server start in Port ${PORT}`);
    
})