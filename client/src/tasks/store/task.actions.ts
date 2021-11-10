import { taskService } from "../services/task.service";

export function loadTasks(filter = {}) {
  return async (dispatch: any) => {
    try {
      const tasks = await taskService.query(filter);
      dispatch({
        type: "SET_TASKS",
        tasks,
      });
      // dispatch({
      //   type: 'FILTER_taskS',
      //   filter,
      // });
      return tasks;
    } catch (err) {
      console.log("Cannot load tasks", err);
    }
  };
}
export function filtertasks(filter: any = null) {
  // return async (dispatch) => {
  //   try {
  //     const tasks = await taskService.query(filter);
  //     dispatch({
  //       type: 'SET_taskS',
  //       tasks,
  //     });
  //   } catch (err) {
  //     showErrorMsg('Cannot load tasks');
  //     console.log('Cannot load tasks', err);
  //   }
  // };
}

export function onRemovetask(taskId: string) {
  return (dispatch: any, getState: any) => {
    taskService
      .remove(taskId)
      .then(() => {
        console.log("Deleted Succesfully!");
        dispatch({
          type: "REMOVE_TASK",
          taskId,
        });
      })
      .catch((err: any) => {
        console.log("Cannot remove task", err);
      });
  };
}

export function onAddtask(task: Object) {
  return (dispatch: any) => {
    // const task = taskService.getEmptytask();
    const addedtask = taskService
      .save(task)
      .then((savedtask) => {
        console.log("Added task", savedtask);
        dispatch({
          type: "ADD_TASK",
          task: savedtask,
        });
      })
      .catch((err) => {
        console.log("Cannot add task", err);
      });
  };
}

export function onUpdatetask(task: Object) {
  return async (dispatch: any) => {
    try {
      const updatedtask = await taskService.save(task);
      dispatch({
        type: "UPDATE_TASK",
        updatedtask,
      });
      return task;
    } catch (err) {
      console.log("Cannot  update task", err);
    }
  };
}

export function onSetCurrtask(taskId: string) {
  return async (dispatch: any) => {
    try {
      const currtask = await taskService.getById(taskId);
      dispatch({
        type: "SET_CURR_TASK",
        currtask,
      });
      return currtask;
    } catch (err) {
      console.log("Cannot  onSetCurrtask ", err);
    }
  };
}
