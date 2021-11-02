import mongoose from "mongoose";
const { model, Schema } = mongoose;
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "New Project",
  },
  //admin should be at level 2
  projectManagers: [
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
/**
 * 
 * @param validateProject 
 * @returns boolean
 */

function validateProject(project: any){
  const schema = Joi.object({
    name: Joi.string(),
    projectManagers: Joi.array().item(Joi.objectId()).required(),
    status: Joi.number(),
    tasks: Joi.array().item(Joi.objectId()),
    team: Joi.objectId()
  });

  return schema.validate(project);
}

module.exports.Project = model('Project', projectSchema);
module.exports.validateProject = validateProject;