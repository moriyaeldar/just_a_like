import mongoose from "mongoose";
const { model, Schema } = mongoose;

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
