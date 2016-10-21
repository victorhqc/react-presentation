import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import merge from './merge';

export let rootReducer = combineReducers({
  merge,
  routing: routerReducer,
});
