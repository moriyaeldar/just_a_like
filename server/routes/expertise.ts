import { Router } from "express";
const router = Router();
const expertiseController = require('../controllers/expertiseController');

router.get('/', expertiseController.index);
router.get('/:id', expertiseController.show);
// router.post('/', expertiseController.create);
// router.put('/', expertiseController.edit);
// router.delete('/', expertiseController.delete);

// This is a test

module.exports = router;