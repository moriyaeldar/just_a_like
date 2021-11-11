"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "New Team",
    },
    //level 2
    admin: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task",
            required: false,
        },
    ],
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});
module.exports = model("Team", teamSchema);
//# sourceMappingURL=team.model.js.map