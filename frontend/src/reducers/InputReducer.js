import * as types from '../actions/types';

const INIT_STATE = {
  inputValue: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.INPUT_UPDATE:
      return { inputValue: action.payload };
    default:
      return state;
  }
};
