import { Router } from "express";
import { admin, notJunior, allPermitted } from "../middleware/permissionMiddleware";
const router = Router();
const taskController = require("./taskController");

router.get("/", allPermitted, taskController.allTasks);
router.post("/", admin, taskController.createTask);
router.delete("/:tid", admin, taskController.deleteTask);
router.put("/:tid", notJunior, taskController.updateTask);
router.get("/:uid", notJunior, taskController.getAllAssociatedTasks);
router.get("/:uid/:pid", notJunior, taskController.getAssociatedTasksInProject);

module.exports = router;
