import { updateObject } from '../../utilities/utility';
import * as actionTypes from './actionTypes';

interface Action {
  type:string
  user: any
  users:Array<object>
  userId:string
}

const initialState = {
  user: null as any,
  token:  null as any,
  users: [] as any,
  loading: false,
  error: null as any,
}

const authStart = (state: any, action: any) => {
  return updateObject(state, {
      loading: true, 
      error: null
  })
}

const authSuccess = (state: any, action: any) => {
  return updateObject(state, {
      token: action.token,
      user: action.user,
      loading: false,
      error: null
  })
}


const authFail = (state: any, action: any) => {
  return updateObject(state, {
      loading: false,
      error: action.error
  })
}

const authLogout = (state: any, action: any) => {
  return updateObject(state, {
      error: null,
      user: null,
      token: null
  })
}


export function userReducer(state = initialState, action:Action) {
  var newState = state;
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
 
    default: return state;
  }
}
