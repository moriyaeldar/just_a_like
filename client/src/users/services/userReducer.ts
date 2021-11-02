// const INITIAL_STATE = {
//   loggedInUser: {
//     name: 'Muki',
//     balance: 100
//   }
// }
// export function userReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'SPEND_BALANCE':
//       return {
//         ...state,
//         loggedInUser: {
//           ...state.loggedInUser,
//           balance: state.loggedInUser.balance - action.spendAmount
//         }
//       }
//     default:
//       return state
//   }
// }

import { combineReducers } from 'redux'
import { Action } from './userActions'
// States' definition
export interface AccessToken {
  isFetching: boolean
  accessToken?: string
}
export interface State {
  accessToken: AccessToken
}
const accessToken = (state: AccessToken = { isFetching: false }, action: Action): AccessToken => {
  switch (action.type) {
  case 'SET':
    return { ...state, accessToken: action.accessToken }
  case 'SET_FETCHING':
    return { ...state, isFetching: action.isFetching }
  }
}
export default combineReducers<State>({
  accessToken
})