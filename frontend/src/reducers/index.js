import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import InputReducer from './InputReducer';

export default combineReducers({
  items: ItemReducer,
  input: InputReducer
});
