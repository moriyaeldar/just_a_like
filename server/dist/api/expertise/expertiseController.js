"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = require('../../utillities/catchAsync');
const Expertise = require('../../models/expertise.model');
/**
 * Get all expertise:
 * Any user from level 1-4
 * can get all expertises
 * */
module.exports.index = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Find all expertise
    const expertises = yield Expertise.find();
    console.log(`[EXPERTISE-GET] - send ${expertises.length} expertise`);
    // Send Expertise to client
    res.send(expertises);
}));
/**
 * Create expertise:
 * Require user in level 1
 * can create expertises
 * */
module.exports.create = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    // Create new expertise
    const expertise = yield new Expertise({ name });
    // Save expertise in Database
    expertise.save();
    console.log(`[EXPERTISE-CREATE]: Created expertise`);
    res.send(expertise);
}));
/**
 * Delete expertise:
 * Require user level 1 (Admin)
 * to delete existing expertise.
 *
 * @param:
 * id - expertise id
 * */
module.exports.delete = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Find expertise and delete
    let result = yield Expertise.findByIdAndDelete(req.params.id);
    if (!result) {
        res.status(404).send({ message: 'No Expertise found' });
    }
    // Send result to client
    console.log(`[EXPERTISE-DELETE]: Deleted expertise`);
    res.send(result);
}));
//# sourceMappingURL=expertiseController.js.map