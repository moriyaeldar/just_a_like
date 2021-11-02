
import { createStore, combineReducers, applyMiddleware } from 'redux'
import session, { State as SessionState } from './teams/store/teamReducer'
import thunk from 'redux-thunk'
export interface RootState {
  session: SessionState
}
export default createStore(combineReducers<RootState>({
  session
}), applyMiddleware(thunk))

// import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { teamReducer } from './reducers/teamReducer';
// import { userReducer } from './reducers/userReducer';

// // Connecting redux devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// // Combining reducers into one
// const rootReducer = combineReducers({
//   teamModule: teamReducer,
//   userModule: userReducer
// })

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))