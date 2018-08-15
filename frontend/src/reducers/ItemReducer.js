import * as types from '../actions/types';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ITEMS_FETCH_SUCCESS:
      return action.payload;
    case types.CREATE_ITEM_SUCCESS:
      return [...state, action.payload];
    case types.DELETE_ITEM_SUCCESS:
      return state.filter(item => item.id !== action.payload);
    case types.FILTER_TODO:
      return state.filter(item => {
        return item.visibilityFilter === action.filter;
      });
    default:
      return state;
  }
};
