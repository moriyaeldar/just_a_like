import { Response, Request } from "express";
const catchAsync = require("../../utillities/catchAsync");
const Task = require("../../models/task.model");
const Project = require("../../models/project.model");
const User = require("../../models/user.model");

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
 * @access Require user level 1 (-Admin)
 * to create new task
 * */
module.exports.createTask = catchAsync(async (req: Request, res: Response) => {
  const { name, description, status, users, startDate, finishDate } = req.body;

  //Create new task
  const newTask = new Task({
    name,
    description,
    status,
    users,
    startDate,
    finishDate,
  });
  let task = await newTask.save();

  console.log(`[TASK-CREATE]: added new task to DB`);

  if (newTask) res.send("Added new task: " + task);
});

/**
 * Delete tasks:
 * @access Require user level 1 (-Admin)
 * to delete existing task
 *
 * @param tid task id
 * */
module.exports.deleteTask = catchAsync(async (req: Request, res: Response) => {
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
 * @access Level 3 - can update task only if he is associated with the project.
 * @access Level 1 - can update any task in any project.
 *
 * @param tid task id
 * @augments _id user id in request body
 * @augments projectId project id in request body
 * */
module.exports.updateTask = catchAsync(async (req: Request, res: Response) => {
  const { _id } = req.body.user || req.body || null;
  const { projectId } = req.body || req.body.project || null;
  const tid = req.params.tid;
  var user: any = {};
  var project: any = {};

  project = await Project.find({ _id: projectId }, (error: any, data: any) => {
    if (error) {
      console.log(`Failed to find project ${projectId}:\n ${error}`);
    } else {
      return data;
    }
  }).clone();

  user = await User.find({ _id: _id }, (error: any, data: any) => {
    if (error) {
      console.log(`Failed to find user ${_id}:\n ${error}`);
    } else {
      return data;
    }
  }).clone();

  //Check if user associated with the project and has permission to update task
  if (
    (user[0].level == "3" && project[0].tasks.toString().includes(tid)) ||
    user[0].level == "1"
  ) {
    const { name, description, status, users, startDate, finishDate } =
      req.body;

    //Get the task required to update
    const task = await Task.findById(tid);
    if (task) {
      task.name = name;
      task.description = description;
      task.status = status;
      task.users = users || [];
      task.startDate = startDate;
      task.finishDate = finishDate;
    }

    //Save to DB
    const updatedTask = await task.save();

    if (updatedTask) {
      console.log(
        `[TASK-UPDATE] - user ${_id} updated task_id: ${tid}, ${updatedTask} `
      );
      res.send(`Task updated: \n${updatedTask}`);
    } else {
      res.send(`No document found for task id: ${tid}`);
    }
  } else {
    console.log(`Not permitted to update [level]: ${user[0].level}`);
    res.send(`Not permitted to update task: ${tid}`);
  }
});

/**
 * Get all Associated tasks for user:
 * @access Require user level 3-1
 * to get associated all tasks.
 *
 * @param uid user id
 * */
module.exports.getAllAssociatedTasks = catchAsync(
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
 * @access Level 3 - get he's associated tasks in associated project.
 * @access Level 2 - get he's associated tasks in associated project.
 * @access Level 1 - get all the tasks in the project.
 *
 * @param uid user id
 * @param pid project id
 *
 * */
module.exports.getAssociatedTasksInProject = catchAsync(
  async (req: Request, res: Response) => {
    const uid = req.params.uid;
    const pid = req.params.pid;

    //Get all associated tasks id's for specific project.
    const tasks = await Project.findById({ _id: pid }, "tasks");

    const associatedTasks: any[] = [];
    // Get all task that associated to the user from the project id
    for (let i = 0; i < tasks.tasks.length; i++) {
      let task = await Task.findById({ _id: tasks.tasks[i] });
      //TODO: If Admin reconized - return array of all results.
      if (task) {
        //Check if task contain the uid
        if (task.users.includes(uid)) {
          associatedTasks.push(task);
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
