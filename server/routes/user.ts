import { Router } from "express";
const router = Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);
router.get('/:id', userController.create);
router.post('/');
router.post('/login');
router.put('/');

module.exports = router;