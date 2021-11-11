"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const interestController = require('./interestController');
router.get('/', interestController.index);
router.post('/', interestController.create);
router.delete('/:id', interestController.create);
module.exports = router;
//# sourceMappingURL=interest.routes.js.map