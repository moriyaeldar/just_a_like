import * as actions from './acrionTypes';

interface Action {
  type:string
  filter:any
  projects:Array<object>
  projectId:string
  project:Array<object>
  currproject:object
  _id:string
}

const initialState = {
  projects:Array({}),
  project: Array({}),
  currproject:Object(''),
  filterBy: {
   
  }
};
export function projectReducer(state = initialState, action:Action) {
  var newState = state;
  var projects;
  var project;
  switch (action.type) {
    case actions.GET_PROJECTS:
      newState = { ...state, projects: action.projects };
      break;
    case actions.GET_PROJECT:
      newState = {...state, project: action.project}
      break;
    case actions.DEL_PROJECT:
      projects = state.projects.filter((project:any) => project._id !== action.projectId);
      newState = { ...state, projects };
      break;
    case actions.SET_PROJECT:
      newState = { ...state, projects: [...state.projects, action.project] };
      break;
    case actions.PUT_PROJECT:
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
