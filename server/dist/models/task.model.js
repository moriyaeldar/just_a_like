"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "New Task",
    },
    description: {
        type: String,
        required: true,
        default: "description",
    },
    status: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        default: 0,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
    ],
    startDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    finishDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
module.exports = model("Task", taskSchema);
//# sourceMappingURL=task.model.js.map