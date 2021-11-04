interface Action {
  type:string
  filter:any
  teams:Array<object>
  teamId:string
  team:object
  currteam:object
  _id:string
}

const initialState = {
  teams:Array({}),
  currteam:Object(''),
  filterBy: {
   
  }
};
export function teamReducer(state = initialState, action:Action) {
  var newState = state;
  var teams;
  switch (action.type) {
    case 'SET_teamS':
      newState = { ...state, teams: action.teams };
      break;
    case 'REMOVE_team':
      teams = state.teams.filter((team:any) => team._id !== action.teamId);
      newState = { ...state, teams };
      break;
    case 'ADD_team':
      newState = { ...state, teams: [...state.teams, action.team] };
      break;
    case 'UPDATE_team':
      teams = state.teams.map((team:any) => {
        return team._id === action._id ? action : team;
      });
      newState = { ...state, teams };
      break;
    
    case 'SET_CURR_team':
      newState = { ...state, currteam:action.currteam };
      break;
    case 'FILTER_teamS':
      newState = { ...state, filterBy: action.filter   };
      break;

    default:
  }
  return newState;
}
