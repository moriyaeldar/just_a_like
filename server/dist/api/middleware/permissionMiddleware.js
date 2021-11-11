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
exports.allPermitted = exports.notJunior = exports.volunteer = exports.taskManager = exports.requireUser = exports.admin = void 0;
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
/**Only Admin access
 * [Level 1 User]
 * @access Level 1 - Admin
 * @augments user._id should be in request body.
 *
 */
const admin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body.user || req.body;
    const user = yield User.findById(_id);
    if (user && user.level == "1") {
        next();
    }
    else {
        res.status(401).send("Not authorized as an admin");
        throw new Error("Not authorized as an admin");
    }
});
exports.admin = admin;
/**Check if user is't Junior
 * @access Level 1, 2, 3
 * @augments user._id should be in request body.
 */
const notJunior = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body.user || req.body;
    const user = yield User.findById(_id);
    if (user && Number(user.level) <= 3) {
        next();
    }
    else {
        res.status(401).send("Not authorized as an notJunior");
        throw new Error("Not authorized as an notJunior");
    }
});
exports.notJunior = notJunior;
/** Only Volunteer access
 * @access Level 3 - Volunteer
 * @augments user._id should be in request body.
 */
const volunteer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body.user || req.body;
    const user = yield User.findById(_id);
    if (user && Number(user.level) == 3) {
        next();
    }
    else {
        res.status(401).send("Not authorized as an Volunteer");
        throw new Error("Not authorized as an Volunteer");
    }
});
exports.volunteer = volunteer;
/** Only Task Manager access
 * @access Level 2 - Task Manager
 * @augments user._id should be in request body.
 */
const taskManager = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body.user || req.body;
    const user = yield User.findById(_id);
    if (user && Number(user.level) == 2) {
        next();
    }
    else {
        res.status(401).send("Not authorized as an Task Manager");
        throw new Error("Not authorized as an Task Manager");
    }
});
exports.taskManager = taskManager;
/**Check if user exist
 * @access Level 1, 2, 3, 4
 * @augments user._id should be in request body.
 */
const allPermitted = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.body.user || req.body;
    const user = yield User.findById(_id);
    if (user) {
        next();
    }
    else {
        res.status(401).send("User not authorized");
        throw new Error("Not authorized");
    }
});
exports.allPermitted = allPermitted;
/**Check if user have an authorized token
 * @augments x-auth-token should be in request header.
 */
const requireUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("x-auth-token");
    if (!token) {
        console.log(token);
        return res.status(401).send("User not authorized");
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
        console.log(token);
        return res.status(400).send("User not authorized");
    }
    next();
});
exports.requireUser = requireUser;
//# sourceMappingURL=permissionMiddleware.js.map