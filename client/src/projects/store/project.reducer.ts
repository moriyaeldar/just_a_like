interface Action {
  type:string
  filter:any
  projects:Array<object>
  projectId:string
  project:object
  currproject:object
  _id:string
}

const initialState = {
  projects:Array({}),
  currproject:Object(''),
  filterBy: {
   
  }
};
export function projectReducer(state = initialState, action:Action) {
  var newState = state;
  var projects;
  switch (action.type) {
    case 'SET_projectS':
      newState = { ...state, projects: action.projects };
      break;
    case 'REMOVE_project':
      projects = state.projects.filter((project:any) => project._id !== action.projectId);
      newState = { ...state, projects };
      break;
    case 'ADD_project':
      newState = { ...state, projects: [...state.projects, action.project] };
      break;
    case 'UPDATE_project':
      projects = state.projects.map((project:any) => {
        return project._id === action._id ? action : project;
      });
      newState = { ...state, projects };
      break;
    
    case 'SET_CURR_project':
      newState = { ...state, currproject:action.currproject };
      break;
    case 'FILTER_projectS':
      newState = { ...state, filterBy: action.filter   };
      break;

    default:
  }
  return newState;
}
