import { Router } from "express";
const router = Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.index);
router.post('/', projectController.createProject);

// This is a test

module.exports = router;