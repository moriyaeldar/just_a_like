import mongoose from "mongoose";
const { model, Schema } = mongoose;

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