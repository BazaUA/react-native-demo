import * as types from '../actions/types';

const INIT_STATE = {
  inputValue: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.INPUT_UPDATE:
      return { inputValue: action.payload };
    case types.CREATE_ITEM_SUCCESS:
      return { inputValue: '' };
    default:
      return state;
  }
};
