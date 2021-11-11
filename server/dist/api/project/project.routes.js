"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const projectController = require('./projectController');
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getSpecificProject);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);
router.put("/:id", projectController.updateProject);
module.exports = router;
//# sourceMappingURL=project.routes.js.map