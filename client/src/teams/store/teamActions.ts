// import { teamService } from '../../services/teamService'

// export function loadteams() {
//   return async (dispatch, getState) => {
//     const { filterBy } = getState().teamModule
//     try {
//       const teams = await teamService.query(filterBy)
//       dispatch({ type: 'SET_TEAMS', teams })
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
// export function getteamById(teamId) {
//   return async dispatch => {
//     const team = await teamService.getById(teamId)
//     dispatch({ type: 'SET_TEAM', team })
//   }
// }
// export function tryteam(teamId) {
//   return async dispatch => {
//     const team = await teamService.tryteam(teamId)
//     dispatch({ type: 'UPDATE_TEAM', team })
//   }
// }

// export function removeteam(teamId) {
//   return async dispatch => {
//     await teamService.remove(teamId)
//     dispatch({ type: 'REMOVE_TEAM', teamId })
//   }
// }

// export function setFilterBy(filterBy) {
//   return dispatch => {
//     dispatch({ type: 'SET_FILTER_BY', filterBy })
//   }
// }

import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
// Action Definition
export interface SetAction {
  type: 'SET'
  accessToken: string
}
export interface SetFetcing {
  type: 'SET_FETCHING'
  isFetching: boolean
}
// Union Action Types
export type Action = SetAction | SetFetcing
// Action Creators
export const set = (accessToken: string): SetAction => {
  return { type: 'SET', accessToken }
}
export const isFetching = (isFetching: boolean): SetFetcing => {
  return { type: 'SET_FETCHING', isFetching }
}
export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true))
      console.log('Login in progress')
setTimeout(() => {
        dispatch(set('this_is_access_token'))
setTimeout(() => {
          dispatch(isFetching(false))
          console.log('Login done')
          resolve()
        }, 1000)
}, 3000)
    })
  }
}