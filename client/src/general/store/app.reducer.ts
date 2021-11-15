import { updateObject } from '../../utilities/utility';
import * as actionTypes from './actionTypes';

interface Action {
  type:string
  page: string;
}

const initialState = {
  page: null as any,
}

const setPageName = (state: any, action: Action) => {
  return updateObject(state, {
    page: action.page
  })
}


export function appReducer(state = initialState, action:Action) {
  var newState = state;
  switch (action.type) {
    case actionTypes.SET_PAGE_NAME: return setPageName(state, action);
    default: return state;
  }
}
