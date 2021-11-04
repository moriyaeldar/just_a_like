import mongoose from "mongoose";
const { model, Schema } = mongoose;

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
