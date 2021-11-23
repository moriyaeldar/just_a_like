import { Router } from "express";
import {
  admin,
  notJunior,
  allPermitted,
  requireUser,
} from "../../middleware/permissionMiddleware";
const router = Router();
const taskController = require("./taskController");

router.get("/", allPermitted, requireUser, taskController.allTasks);
router.post("/", admin, requireUser, taskController.createTask);
router.delete("/:tid", admin, requireUser, taskController.deleteTask);
router.put("/:tid", notJunior, requireUser, taskController.updateTask);
router.get(
  "/:uid",
  notJunior,
  requireUser,
  taskController.getAllAssociatedTasks
);
router.get(
  "/:uid/:pid",
  notJunior,
  requireUser,
  taskController.getAssociatedTasksInProject
);

module.exports = router;
