import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';

import {authReducer} from '../reducers/authReducer';
import {errorReducer} from '../reducers/errorReducer';

let rootReducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.__store__ = store;

export default store;
