const express = require('express');
const mongoose = require("mongoose");
const cors= require('cors');
const app = express();


app.use(cors({ 
  credentials: true,
}));

require("dotenv").config();


mongoose.connect("mongodb://localhost/just_a_like", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB..."))
.catch(() => console.error("Could not connect to MongoDB..."));

const projectRoutes = require('./routes/project');

app.use('/project', projectRoutes);
    
const port = process.env.PORT|| 8000;
app.listen(port, () => {
  console.log("Connect succesfully on port: " + port);
});