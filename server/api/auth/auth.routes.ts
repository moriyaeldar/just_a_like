import { Router } from "express";
const router = Router();
const userController = require('./authController');

router.post('/google-login', userController.googleLogin);
router.post('/google-register', userController.googleRegister);
router.post('/facebook-login', userController.facebookLogin);
router.post('/facebook-register', userController.facebookRegister);

module.exports = router;