import * as types from '../actions/types';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.ITEMS_FETCH_SUCCESS:
      return action.payload;
    case types.CREATE_ITEM_SUCCESS:
      return [...state, action.payload];
    case types.DELETE_ITEM_SUCCESS:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
