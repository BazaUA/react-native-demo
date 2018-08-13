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

const doneItemSuccess = () => {
  return { type: types.SET_ITEM_DONE_SUCCESS };
};

const undoneItemSuccess = () => {
  return { type: types.SET_ITEM_DONE_SUCCESS };
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

export const createItem = ({ name, date, done }) => {
  return (dispatch) => {
    const url = `${hostApi}/item`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, date, done
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
        dispatch(doneItemSuccess());
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
        dispatch(undoneItemSuccess());
      })
      .catch(error => {
        Toast.show('Something went wrong!');
        throw (error);
      });
  };
};
