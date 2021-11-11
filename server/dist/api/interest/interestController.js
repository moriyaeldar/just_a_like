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
const Interest = require('../../models/interest.model');
/**
 * Get all interests:
 * Any user from level 1-4
 * can get all interests
 * */
module.exports.index = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Find all interests
    const interests = yield Interest.find();
    console.log(`[INTEREST-GET] - send ${interests.length} interests`);
    // Send interests to client
    res.send(interests);
}));
/**
 * Create interests:
 * Require user in level 1
 * can create interests
 * */
module.exports.create = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    // Create new interest
    const interest = yield new Interest({ name });
    // Save interest in Database
    interest.save();
    console.log(`[INTEREST-CREATE]: Created interest`);
    res.send(interest);
}));
/**
 * Delete interest:
 * Require user level 1 (Admin)
 * to delete existing interest.
 *
 * @param:
 * id - interest id
 * */
module.exports.delete = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Find interest and delete
    let result = yield Interest.findByIdAndDelete(req.params.id);
    if (!result) {
        res.status(404).send({ message: 'No interest found' });
    }
    // Send result to client
    console.log(`[INTEREST-DELETE]: Deleted intesrest`);
    res.send(result);
}));
//# sourceMappingURL=interestController.js.map