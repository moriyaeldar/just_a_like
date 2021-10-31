import express, { Application } from "express";

const cors = require("cors");
const projectRoutes = require("../routes/project");
const taskRoutes = require("../routes/task");

module.exports = function(app: Application) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({credentials: true,}));
    app.use("/project", projectRoutes);
    app.use("/task", taskRoutes);
}
