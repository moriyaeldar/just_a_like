"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('./userController');
router.get('/', userController.index);
router.get('/:id', userController.show);
router.delete('/:id', userController.delete);
// router.put('/');
module.exports = router;
//# sourceMappingURL=user.routes.js.map