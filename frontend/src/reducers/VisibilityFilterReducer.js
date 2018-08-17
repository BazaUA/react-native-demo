import * as types from '../actions/types';

export default function VisibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
