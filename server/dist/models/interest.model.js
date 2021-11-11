"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const interestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});
module.exports = model('Interest', interestSchema);
//# sourceMappingURL=interest.model.js.map