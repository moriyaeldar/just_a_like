import { Router } from "express";
const router = Router();
const userController = require('./userController');

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/google-login', userController.googleLogin);
router.post('/google-register', userController.googleRegister);
router.post('/facebook-login', userController.facebookLogin);
router.post('/facebook-register', userController.facebookRegister);
router.delete('/:id', userController.delete);
// router.put('/');

module.exports = router;