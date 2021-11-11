"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { model, Schema } = mongoose_1.default;
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "New Project",
    },
    //admin should be at level 2
    projectManager: {
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
function validateProject(project) {
    const schema = Joi.object({
        name: Joi.string(),
        projectManager: Joi.Joi.objectId().required(),
        status: Joi.number(),
        tasks: Joi.array().item(Joi.objectId()),
        team: Joi.objectId()
    });
    return schema.validate(project);
}
module.exports = model('Project', projectSchema);
// module.exports.validateProject = validateProject;
//# sourceMappingURL=project.model.js.map