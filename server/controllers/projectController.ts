import { Response, Request } from "express";
const catchAsync = require("../utillities/catchAsync");

/*************************************************************
 ** All Routes taken from "requirments" doc. *****************
 ** If you didn't understand something please check the doc. *
 ** UML also associated within the project files *************
 *************************************************************/

/**
 * Get all projects:
 * Any user from level 1-4
 * can get all projects
 * */
module.exports.index = catchAsync(async (req: Request, res: Response) => {
  res.json("All projects");
});

/**
 * Create projects:
 * Require user in level 1 (-Admin)
 * to create new project
 * */
module.exports.createProject = catchAsync(
  async (req: Request, res: Response) => {
    res.json("Create project");
  }
);

/**
 * Delete projects:
 * Require user in level 1 (-Admin)
 * to delete existing project
 *
 * params:
 * pid - project id
 * */
module.exports.deleteProject = catchAsync(
  async (req: Request, res: Response) => {
    res.json("Delete project");
  }
);

/**
 * Update projects:
 * Require user in level 1 (-Admin)
 * to update existing project
 *
 * * Used to update project users list. (By Requirments)
 *
 * params:
 * pid - project id
 * */
module.exports.updateProject = catchAsync(
  async (req: Request, res: Response) => {
    res.json("Update project");
  }
);
