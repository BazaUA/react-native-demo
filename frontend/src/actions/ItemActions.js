import axios from 'axios';
import * as types from './types';

const loadItemsSuccess = (items) => {
  return { type: types.ITEMS_FETCH_SUCCESS, payload: items };
};

export const itemsFetch = () => {
  console.log('action');
  return (dispatch) => {
    const url = 'http://localhost:8080/api/items';
    axios.get(url)
      .then((items) => {
        dispatch(loadItemsSuccess(items.data));
        
        console.log(items);
      })
      .catch((error) => {
        console.log('new');
        throw (error);
        
      });
  };
};
