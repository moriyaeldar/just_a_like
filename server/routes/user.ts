import { Router } from "express";
const router = Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);
// router.get('/:id', userController.showUser);
// router.post('/facebook-auth', userController.facebookAuth);
router.post('/google-auth', userController.googleAuth);
// router.put('/');

module.exports = router;