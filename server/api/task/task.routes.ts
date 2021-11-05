import { Router } from "express";
const router = Router();
const taskController = require("./taskController");

router.get("/", taskController.allTasks);
router.post("/", taskController.createTask);
router.delete("/:tid", taskController.deleteTask);
router.put("/:tid", taskController.updateTask);
router.get("/:uid", taskController.getAssociatedTasks);

module.exports = router;
