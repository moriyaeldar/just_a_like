import mongoose from "mongoose";
const { model, Schema } = mongoose;

const interestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = model('Interest', interestSchema);