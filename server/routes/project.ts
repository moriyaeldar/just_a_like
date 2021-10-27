const router = require("express").Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.index);
router.post("/", projectController.createProject);
router.delete("/:pid", projectController.deleteProject);
router.put("/:pid", projectController.updateProject);

module.exports = router;
