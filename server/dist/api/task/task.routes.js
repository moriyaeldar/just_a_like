"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permissionMiddleware_1 = require("../middleware/permissionMiddleware");
const router = (0, express_1.Router)();
const taskController = require("./taskController");
router.get("/", permissionMiddleware_1.allPermitted, permissionMiddleware_1.requireUser, taskController.allTasks);
router.post("/", permissionMiddleware_1.admin, permissionMiddleware_1.requireUser, taskController.createTask);
router.delete("/:tid", permissionMiddleware_1.admin, permissionMiddleware_1.requireUser, taskController.deleteTask);
router.put("/:tid", permissionMiddleware_1.notJunior, permissionMiddleware_1.requireUser, taskController.updateTask);
router.get("/:uid", permissionMiddleware_1.notJunior, permissionMiddleware_1.requireUser, taskController.getAllAssociatedTasks);
router.get("/:uid/:pid", permissionMiddleware_1.notJunior, permissionMiddleware_1.requireUser, taskController.getAssociatedTasksInProject);
module.exports = router;
//# sourceMappingURL=task.routes.js.map