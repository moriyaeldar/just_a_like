const router = require("express").Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getSpecificProject);
router.post("/", projectController.createProject);
router.delete("/:pid", projectController.deleteProject);
router.put("/:pid", projectController.updateProject);

module.exports = router;
