import _ from 'lodash';
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
    case types.SET_ITEM_UNDONE_SUCCESS:
      return [..._.forEach(state, (item) => {
        if (item.id === action.payload) {
          item.done = false;
        }
      })];
    case types.SET_ITEM_DONE_SUCCESS:
      return [..._.forEach(state, (item) => {
        if (item.id === action.payload) {
          item.done = true;
        }
      })];
    case types.FILTER_TODO:
      return state.filter(item => {
        return item.visibilityFilter === action.filter;
      });
    default:
      return state;
  }
};
