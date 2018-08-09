import * as types from '../actions/types';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ITEMS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
