import { Router } from "express";
const router = Router();
const expertiseController = require('./expertiseController');

router.get('/', expertiseController.index);
router.get('/:uid', expertiseController.getAllAssociatedExpertise);
router.post('/', expertiseController.create);
// router.put('/', expertiseController.edit);
router.delete('/:id', expertiseController.delete);

module.exports = router;