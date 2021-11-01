import { Application } from "express";

const cors = require("cors");
const projectRoutes = require("../routes/project");
const taskRoutes = require("../routes/task");
const expertiseRoutes = require('../routes/expertise');
// const projectRoutes = require('./routes/project');
// const userRoutes = require('./routes/user');


module.exports = function(app: Application) {
    app.use(cors({credentials: true,}));
    app.use("/project", projectRoutes);
    app.use("/task", taskRoutes);
    app.use('/expertise', expertiseRoutes);
    // app.use('/project', projectRoutes);
    // app.use('/user', userRoutes);
}
