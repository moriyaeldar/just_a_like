const router = require("express").Router();
const projectController = require("../controllers/projectController");

router.get('/', projectController.index);
router.post('/', projectController.createProject);

// This is a test

module.exports = router;