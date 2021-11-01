// const INITIAL_STATE = {
//   team: [],
//   currteam: null,
//   filterBy: null
// }
// export function teamReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'SET_TEAM':
//       return {
//         ...state,
//         team: action.team
//       }
//     case 'SET_TEAM':
//       return {
//         ...state,
//         currteam: action.team
//       }
//     case 'SET_FILTER_BY':
//       return {
//         ...state,
//         filterBy: action.filterBy
//       }
//     case 'ADD_TEAM':
//       return {
//         ...state,
//         team: [...state.team, action.team]
//       }
//     case 'REMOVE_TEAM':
//       return {
//         ...state,
//         team: state.team.filter(team => team._id !== action.teamId)
//       }
//     case 'UPDATE_TEAM':
//       const currteam = state.currteam._id === action.team._id ? action.team : state.currteam
//       return {
//         ...state,
//         team: state.team && state.team.map(team => team._id === action.team._id ? action.team : team),
//         currteam
//       }
//     default:
//       return state
//   }
// }

import { combineReducers } from 'redux'
import { Action } from '../actions/teamActions'
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