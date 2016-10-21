import {
  MERGE_INIT
} from '../actions';

export default function merge(state = {}, action = {}) {
  switch(action.type) {
    case MERGE_INIT:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
