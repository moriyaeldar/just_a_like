import { Router } from "express";
const router = Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.index);
router.post("/", taskController.createTask);
router.delete("/:tid", taskController.deleteTask);
router.put("/:pid/:tid", taskController.updateTask);
router.get("/:pid/:tid", taskController.getAssociatedTasks);

module.exports = router;
