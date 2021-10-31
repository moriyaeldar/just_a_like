import express, { Application } from 'express';
const mongoose = require("mongoose");
const cors = require('cors');
const app: Application = express();

app.use(cors({ 
  credentials: true
})); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();


mongoose.connect("mongodb://localhost/just_a_like", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB..."))
.catch(() => console.error("Could not connect to MongoDB..."));

const seeds = require("./seeds");

seeds();


// const projectRoutes = require('./routes/project');
// const userRoutes = require('./routes/user');
const expertiseRoutes = require('./routes/expertise');

// app.use('/project', projectRoutes);
// app.use('/user', userRoutes);
app.use('/expertise', expertiseRoutes);
    
const port = process.env.PORT|| 8000;
app.listen(port, () => {
  console.log("Connect succesfully on port: " + port);
});