// const mongoose = require('mongoose');
import mongoose from "mongoose";
const { model, Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "New Project",
  },
  //admin should be at level 2
  taskManager: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  status: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: false,
    },
  ],
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = model("Project", projectSchema);
