import { Router } from "express";
const router = Router();
const interestController = require('./interestController');

router.get('/', interestController.index);
router.post('/', interestController.create);
router.delete('/:id', interestController.create);

module.exports = router;