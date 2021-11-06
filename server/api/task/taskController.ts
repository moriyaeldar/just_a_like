import { Response, Request } from "express";
const catchAsync = require("../../utillities/catchAsync");
const Task = require("../../models/task.model");
const Project = require("../../models/project.model");

/*************************************************************
 ** All Routes taken from "requirments" doc. *****************
 ** If you didn't understand something please check the doc. *
 ** UML also associated within the project files *************
 *************************************************************/

/**
 * Get all tasks:
 * Any user from level 1-4
 * can get all tasks
 * */
module.exports.allTasks = catchAsync(async (req: Request, res: Response) => {
  //Get all Tasks from Task collection
  const tasks = await Task.find();
  console.log(`[TASK-GET] - send ${tasks.length} tasks`);
  res.send(tasks);
});

/**
 * Create tasks:
 * Require user level 1 (-Admin)
 * to create new task
 * */
module.exports.createTask = catchAsync(async (req: Request, res: Response) => {
  //TODO: Add permission control

  const newTask = req.body;

  //Create new task
  const result = await new Task(newTask);
  result.save();

  console.log(`[TASK-CREATE]: added new task to DB`);

  if (result) res.send("Added new task: " + newTask);
});

/**
 * Delete tasks:
 * Require user level 1 (-Admin)
 * to delete existing task
 *
 * @param:
 * tid - task id
 * */
module.exports.deleteTask = catchAsync(async (req: Request, res: Response) => {
  //TODO: Add permission control
  const tid = req.params.tid;
  //Delete task by task id
  const result = await Task.findByIdAndDelete(tid);
  console.log(`[TASK-REMOVE] - removed task_id: ${tid}`);
  console.log(result);
  if (result) {
    res.send("Deleted task: " + tid);
  } else {
    res.send("Task not found in DB: " + tid);
  }
});

/**
 * Update tasks:
 * Require user level 3 or 1 (Volunteer / Admin)
 * to update existing task.
 *
 * Level 3 - can update task only if he is associated with the project.
 * Level 1 - can update any task in any project.
 *
 * @param:
 * tid - task id
 * */
module.exports.updateTask = catchAsync(async (req: Request, res: Response) => {
  //TODO: Add permission control
  const tid = req.params.tid;
  const updatedTask = req.body;
  const filter = { _id: req.params.tid };
  //Fins task by id and update entire object
  const doc = await Task.findByIdAndUpdate(filter, updatedTask);
  if (doc == null) {
    res.send(`No document found for task id: ${tid}`);
  } else {
    console.log(
      `[TASK-UPDATE] - update task_id: ${tid}, ${JSON.stringify(updatedTask)} `
    );
    res.send(`Task updated: \n${updatedTask}`);
  }
});

/**
 * Get all Associated tasks for user:
 * Require user level 3-1
 * to get associated all tasks.
 *
 * @param:
 * uid - user id
 * */
module.exports.getAssociatedTasks = catchAsync(
  async (req: Request, res: Response) => {
    //TODO: Add permission control
    const uid = req.params.uid;
    //Find user id in Task collection and return every associated task.
    const result = await Task.find({ users: { $in: uid } });
    if (result.length == 0) {
      res.send(`No asssociated tasks found for user id: ${uid}`);
    } else {
      console.log(
        `[ALL-ASSOCIATED-TASK] found ${result.length} tasks for id: ${uid}`
      );
      res.send(result);
    }
  }
);

/**
 * Get all Associated tasks for user in a specific project:
 * Require user level 3-1
 * to get associated tasks.
 *
 * Level 3 - get he's associated tasks in associated project.
 * Level 2 - get he's associated tasks in associated project.
 * Level 1 - get all the tasks in the project.
 *
 * @param:
 * uid - user id
 * pid - project id
 *
 * */
module.exports.getAssociatedTasksInProject = catchAsync(
  async (req: Request, res: Response) => {
    //TODO: Add permission control
    const uid = req.params.uid;
    const pid = req.params.pid;

    //Get all associated tasks id's for specific project.
    const tasks = await Project.findById({ _id: pid }, "tasks");

    const associatedTasks: any[] = [];
    // Get all task that associated to the user from the project id
    for (let i = 0; i < tasks.tasks.length; i++) {
      let result = await Task.findById({ _id: tasks.tasks[i] });
      //TODO: If Admin reconized - return array of all results.
      if (result) {
        //Check if res contain the uid
        if (result.users.includes(uid)) {
          associatedTasks.push(result);
        }
      }
    }
    if (associatedTasks.length == 0) {
      res.send(`No asssociated tasks found for user id: ${uid}`);
    } else {
      console.log(
        `[ASSOCIATE-TASK-BY-ID] found ${associatedTasks.length} tasks for \nid: ${uid}\nin project id: ${pid}`
      );
      res.send(associatedTasks);
    }
  }
);
