import { Router } from "express";
const router = Router();
const userController = require('./userController');

router.get('/', userController.index);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);
// router.put('/');

module.exports = router;