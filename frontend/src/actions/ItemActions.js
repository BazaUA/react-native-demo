import axios from 'axios';
import Toast from 'react-native-simple-toast';
import * as types from './types';

const hostApi = 'https://react-native-demo-api.herokuapp.com/api';

const loadItemsSuccess = (items) => {
  return { type: types.ITEMS_FETCH_SUCCESS, payload: items };
};

const createItemSuccess = (item) => {
  return { type: types.CREATE_ITEM_SUCCESS, payload: item };
};

const deleteItemSuccess = (itemId) => {
  return { type: types.DELETE_ITEM_SUCCESS, payload: itemId };
};

const doneItemSuccess = (itemId) => {
  return { type: types.SET_ITEM_DONE_SUCCESS, payload: itemId };
};

const undoneItemSuccess = (itemId) => {
  return { type: types.SET_ITEM_UNDONE_SUCCESS, payload: itemId };
};

export const itemsFetch = () => {
  const url = `${hostApi}/items`;
  return (dispatch) => {
    axios.get(url)
      .then((items) => {
        dispatch(loadItemsSuccess(items.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

export const createItem = ({ value, date, done }) => {
  return (dispatch) => {
    const url = `${hostApi}/item`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value, date, done
      })
    })
      .then((response) => {
        response.json()
          .then((body) => {
            dispatch(createItemSuccess(body));
            Toast.show('Created success!');
          });
      })
      .catch(error => {
        Toast.show('Something went wrong!');
        throw (error);
      });
  };
};

export const deleteItem = (itemId) => {
  return (dispatch) => {
    const url = `${hostApi}/item/${itemId}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(deleteItemSuccess(itemId));
        Toast.show('Deleted success!');
      })
      .catch(error => {
        Toast.show('Something went wrong!');
        throw (error);
      });
  };
};

export const doneItem = (itemId) => {
  return (dispatch) => {
    const url = `${hostApi}/done/${itemId}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(doneItemSuccess(itemId));
      })
      .catch(error => {
        Toast.show('Something went wrong!');
        throw (error);
      });
  };
};


export const undoneItem = (itemId) => {
  return (dispatch) => {
    const url = `${hostApi}/undone/${itemId}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(undoneItemSuccess(itemId));
      })
      .catch(error => {
        Toast.show('Something went wrong!');
        throw (error);
      });
  };
};

export const inputUpdate = (value) => {
  return {
    type: types.INPUT_UPDATE,
    payload: value
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
  };
};
