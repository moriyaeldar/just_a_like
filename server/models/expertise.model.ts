import mongoose from "mongoose";
const { model, Schema } = mongoose;

const expertiseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = model('Expertise', expertiseSchema);