import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import InputReducer from './InputReducer';
import VisibilityFilterReducer from './VisibilityFilterReducer';

export default combineReducers({
  items: ItemReducer,
  input: InputReducer,
  visibilityFilter: VisibilityFilterReducer
});
