import { Response, Request } from "express";
const catchAsync = require("../../utillities/catchAsync");
// const { Project, validateProject } = require('../../models/project.model'); //Validate is not export for now.
const Project = require('../../models/project.model');
const { User } = require('../../models/user.model'); //Must to be ---validateUser---

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
module.exports.getAllProjects = catchAsync(async (req: Request, res: Response) => {
    const projects = await Project.find().sort('name');
    res.send(projects);
});

module.exports.getSpecificProject = catchAsync(async (req: Request, res: Response) => {
    const project = await Project.findById(req.params.id);

    if(!project) return res.status(404).json("The project with the given does not exist.");
    
    res.send(project);
});

/**
 * Create projects:
 * Require user in level 1 (-Admin)
 * to create new project
 * */
module.exports.createProject = catchAsync(async (req: Request, res: Response) => {
      
       // ---Validation of project and users---
      //  let {error} = validateProject(req.body);
      //  if(error) return res.status(400).json(error.details[0].message);
 
      //  //Check the users that will be project manager
      //  const projectMangerId = req.params.projectManager;
      //      let user = await User.findById(projectMangers);
      //      if(!user) 
      //        return res.status(404).json(`The user with the id: ${projectMangerId} does not exist.`);
      //      if(user.level > 2) //Check the permission level
      //        return res.status(401).json(`The user with id:  ${projectMangers[i]} is not allowed to be project manager.`);
      //  }
      const project = new Project({
        name: req.body.name,
        projectManager: req.body.projectManager,
        status: req.body.status,
        tasks: req.body.tasks,
        team: req.body.team
      });

      await project.save();

      res.send(project);
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
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if(!project) return res.status(404).send('The project with the given id not found.');

    res.send(project);    
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
      //  ---Validation of project and users---
      //  let {error} = validateProject(req.body);
      //  if(error) return res.status(400).json(error.details[0].message);
 
      //  //Check the users that will be project manager
      //  const projectMangerId = req.params.projectManager;
      //      let user = await User.findById(projectManger);
      //      if(!user) 
      //        return res.status(404).json(`The user with the id: ${projectMangerId} does not exist.`);
      //      if(user.level > 2) //Check the permission level
      //        return res.status(401).json(`The user with id:  ${projectMangers[i]} is not allowed to be project manager.`);
      //  }

       const project = await Project.findByIdAndUpdate(
         req.params.id,
         {
          name: req.body.name,
          projectManager: req.body.projectManager,
          status: req.body.status,
          tasks: req.body.tasks,
          team: req.body.team
         }
       );
        
       if(!project) return res.status(404).send('The project with given id not found.');

       res.send(project);
  }
);
