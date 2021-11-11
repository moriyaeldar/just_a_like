"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('./authController');
router.post('/google-login', userController.googleLogin);
router.post('/google-register', userController.googleRegister);
router.post('/facebook-login', userController.facebookLogin);
router.post('/facebook-register', userController.facebookRegister);
router.post('/tokenIsValid', userController.tokenValidation);
module.exports = router;
//# sourceMappingURL=auth.routes.js.map