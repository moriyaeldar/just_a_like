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
const User = require('../../models/user.model');
const catchAsync = require('../../utillities/catchAsync');
/**
 * Get all users:
 * Any user from level 1-4
 * can get all users
 * */
module.exports.index = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all users from database
    const users = User.find();
    console.log(`[USER-GET] - send ${users.length} users`);
    // return to client found users
    res.json(users);
}));
/**
 * Get all users:
 * Any user from level 1-4
 * can get all users
 *
 * @param:
 * id - user id
 * */
module.exports.show = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all users from database
    const user = User.findById(req.params.id);
    if (!user) {
        // If user is not found, return error with status code 404
        res.status(404).send('User not found');
    }
    // return to client found user
    res.json(user);
}));
/**
 * Delete user:
 * Any user from level 1-4
 * can delete his own account
 * User in level 1
 * can delete all users
 *
 * @param:
 * id - user id
 * */
module.exports.delete = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User.findByIdAndDelete(req.params.id);
    if (!result) {
        res.status(404).send({ message: 'No User found' });
    }
    res.send(result);
}));
//# sourceMappingURL=userController.js.map