import { Response, Request } from "express";
const catchAsync = require("../utillities/catchAsync");
const dbService = require("../startup/db");

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
module.exports.index = catchAsync(async (req: Request, res: Response) => {
  try {
    const collection = await dbService.getCollection("Task");
    const tasks = await collection.aggregate().toArray();
    console.log(`[TASK-GET] - send ${tasks.length} tasks`);
    // res.json("All tasks : " + tasks);
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
});

/**
 * Create tasks:
 * Require user level 1 (-Admin)
 * to create new task
 * */
module.exports.createTask = catchAsync(async (req: Request, res: Response) => {
  const newTask = req.body;
  const pid = req.params;

  try {
    //TODO: Add permission control
    const collection = await dbService.getCollection("Task");
    await collection.insertOne(newTask);
  } catch (error) {
    console.log(error);
  }
  console.log(`[TASK-CREATE]: Created task for project ${pid}`);

  res.send("Created task: " + newTask);
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
  res.json("Delete task");
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
  try {
    //TODO: Add permission control
    const tid = req.params.tid;
    const ObjectID = require("mongodb").ObjectID;
    const updatedTask = req.body;
    const collection = await dbService.getCollection("Task");
    const result = await collection.updateOne(
      { _id: ObjectID(tid) },
      { $set: updatedTask }
    );
    console.log(`[TASK-UPDATE] - update task_id: ${tid}, ${result.matchedCount} matched the query criteria`);
    console.log(`[TASK-UPDATE] - ${result.modifiedCount} docs were updated`);
    res.send("task updated.");
  } catch (error) {
    console.log(error);
  }
});

/**
 * Get all Associated tasks for user:
 * Require user level 3-1
 * to get associated tasks.
 *
 * Level 3 - get he's associated tasks in associated project.
 * Level 2 - get he's associated tasks in associated project.
 * Level 1 - get all the tasks in the project.
 *
 * @param:
 * uid - user id
 * */
module.exports.getAssociatedTasks = catchAsync(
  async (req: Request, res: Response) => {
    try {
      //TODO: Add permission control
      const uid = req.params.uid
      const collection = await dbService.getCollection("Task");
      const result = await collection.find(
        {users: uid}, {$where: uid }).toArray();
      console.log(`[TASK-ASSOCIATE] - send tasks for user_id: ${uid} , ${result.length} matched the query criteria`);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  }
);
