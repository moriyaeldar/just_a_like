interface Action {
  type: string;
  filter: any;
  tasks: Array<object>;
  taskId: string;
  task: object;
  currTask: object;
  _id: string;
}

const initialState = {
  tasks: Array({}),
  currTask: Object(""),
  filterBy: {},
};
export function taskReducer(state = initialState, action: Action) {
  var newState = state;
  var tasks;
  switch (action.type) {
    case "SET_TASKS":
      newState = { ...state, tasks: action.tasks };
      break;
    case "REMOVE_TASK":
      tasks = state.tasks.filter((task: any) => task._id !== action.taskId);
      newState = { ...state, tasks };
      break;
    case "ADD_TASk":
      newState = { ...state, tasks: [...state.tasks, action.task] };
      break;
    case "UPDATE_TASK":
      tasks = state.tasks.map((task: any) => {
        return task._id === action._id ? action : task;
      });
      newState = { ...state, tasks };
      break;

    case "SET_CURR_TASK":
      newState = { ...state, currTask: action.currTask };
      break;
    case "FILTER_TASKS":
      newState = { ...state, filterBy: action.filter };
      break;

    default:
  }
  return newState;
}
