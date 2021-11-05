// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { taskReducer } from '../src/tasks/store/task.reducer';
import { teamReducer } from '../src/teams//store/team.reducer';
import { projectReducer } from '../src/projects/store/project.reducer';
import { userReducer } from '../src/users/store/user.reducer';

const rootReducer = combineReducers({
  taskModule: taskReducer,
  teamModule: teamReducer,
  projectModule: projectReducer,
  userModule: userReducer,
});

// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// export const store = createStore(rootReducer, applyMiddleware(thunk))
