"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    linkedin_url: {
        type: String,
        required: true
    },
    expertise: {
        type: Schema.Types.ObjectId,
        ref: "Expertise",
        required: true,
    },
    interests: [
        {
            type: Schema.Types.ObjectId,
            ref: "Interest",
            required: true,
        },
    ],
    level: {
        type: String,
        default: '4',
        required: true
    }
});
module.exports = model('User', userSchema);
//# sourceMappingURL=user.model.js.map