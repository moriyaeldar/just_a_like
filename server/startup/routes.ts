import express, { Application } from "express";
const cors = require("cors");
const projectRoutes = require("../api/project/project.routes");
const taskRoutes = require("../api/task/task.routes");
const expertiseRoutes = require("../api/expertise/expertise.routes");
const interestRoutes = require("../api/interest/interest.routes");
const userRoutes = require("../api/user/user.routes");
const authRoutes = require("../api/auth/auth.routes");

module.exports = function (app: Application) {
  app.use(cors({ credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/project", projectRoutes);
  app.use("/api/task", taskRoutes);
  app.use("/api/expertise", expertiseRoutes);
  app.use("/api/interest", interestRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/auth", authRoutes);
};
