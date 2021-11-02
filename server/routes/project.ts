import { Router } from "express";
const router = Router();
const projectController = require('../controllers/projectController');

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getSpecificProject);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);
router.put("/:id", projectController.updateProject);

module.exports = router;
