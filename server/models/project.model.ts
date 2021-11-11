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
  description: {
    type: String,
    required: true,
    default: "Have no description",
  },
  //admin should be at level 2
  projectManager: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
  participants: [{
    type: Schema.Types.ObjectId,
    ref:"User"
  }],
});
/**
 * 
 * @param validateProject 
 * @returns boolean
 */

function validateProject(project: any){
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    projectManager: Joi.Joi.objectId().required(),
    status: Joi.number(),
    tasks: Joi.array().item(Joi.objectId()),
    participants: Joi.array().item(Joi.objectId())
  });

  return schema.validate(project);
}

module.exports = model('Project', projectSchema);
  // module.exports.validateProject = validateProject;