"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const projectRoutes = require("../api/project/project.routes");
const taskRoutes = require("../api/task/task.routes");
const expertiseRoutes = require('../api/expertise/expertise.routes');
const interestRoutes = require('../api/interest/interest.routes');
const userRoutes = require('../api/user/user.routes');
const authRoutes = require('../api/auth/auth.routes');
module.exports = function (app) {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(cors({ credentials: true }));
    app.use("/api/project", projectRoutes);
    app.use("/api/task", taskRoutes);
    app.use('/api/expertise', expertiseRoutes);
    app.use('/api/interest', interestRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/auth', authRoutes);
};
//# sourceMappingURL=routes.js.map