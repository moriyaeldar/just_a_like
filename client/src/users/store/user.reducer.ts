import { userService } from '../services/user.service.js'
interface Action {
  type:string
  user: any
  users:Array<object>
  userId:string
}
const loggedUser = userService.getLoggedinUser();

const initialState = {
  user: loggedUser ? loggedUser : null,
  users:Array({})
}
export function userReducer(state = initialState, action:Action) {
  var newState = state;
  switch (action.type) {
    case 'SET_USER':
      newState = { ...state, user: action.user };
      break;
  
    case 'REMOVE_USER':
      newState = {
        ...state,
        users: state.users.filter((user:any) => user._id !== action.userId),
      };
      break;
    case 'SET_USERS':
      newState = { ...state, users: action.users };
      break;
 
    default:
  }
 
  return newState;
}
