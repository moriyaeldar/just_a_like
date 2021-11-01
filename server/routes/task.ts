import { Router } from "express";
const router = Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.index);
router.post("/:pid", taskController.createTask);
router.delete("/:tid", taskController.deleteTask);
router.put("/:tid", taskController.updateTask);
router.get("/:uid", taskController.getAssociatedTasks);

module.exports = router;
