import { Router } from "express";
const router = Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.allTasks);
router.post("/", taskController.createTask);
router.delete("/:tid", taskController.deleteTask);
router.put("/:tid", taskController.updateTask);
router.get("/:uid", taskController.getAssociatedTasks);
router.get("/:uid/:pid", taskController.getAssociatedTasksInProject);

module.exports = router;
