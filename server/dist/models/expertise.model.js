"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const expertiseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});
module.exports = model('Expertise', expertiseSchema);
//# sourceMappingURL=expertise.model.js.map