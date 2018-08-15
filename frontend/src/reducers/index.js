import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import InputReducer from './InputReducer';
import visibilityFilter from './VisibilityFilterReducer';

export default combineReducers({
  items: ItemReducer,
  input: InputReducer,
  visibilityFilter
});
