"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const expertiseController = require('./expertiseController');
router.get('/', expertiseController.index);
// router.get('/:id', expertiseController.show);
router.post('/', expertiseController.create);
// router.put('/', expertiseController.edit);
router.delete('/:id', expertiseController.delete);
module.exports = router;
//# sourceMappingURL=expertise.routes.js.map