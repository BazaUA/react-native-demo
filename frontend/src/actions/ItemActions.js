import axios from 'axios';
import * as types from './types';

const host = 'https://react-native-demo-api.herokuapp.com/api';

const loadItemsSuccess = (items) => {
  return { type: types.ITEMS_FETCH_SUCCESS, payload: items };
};

const createItemSuccess = (item) => {
  return { type: types.CREATE_ITEM_SUCCESS, payload: item }
};

const deleteItemSuccess = () => {
  return { type: types.DELETE_ITEM_SUCCESS };
};

const doneItemSuccess = () => {
  return { type: types.SET_ITEM_DONE_SUCCESS };
};

const undoneItemSuccess = () => {
  return { type: types.SET_ITEM_DONE_SUCCESS };
};

export const itemsFetch = () => {
  const url = `${host}/items`;
  return (dispatch) => {
    axios.get(url)
      .then((items) => {
        dispatch(loadItemsSuccess(items.data));
      })
      .catch((error) => {
        throw (error);
      });
  }
};

export const createItem = ({ name, date, done }) => {
  return (dispatch) => {
    const url = `${host}/item`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        name, date, done
      })
    })
      .then((response) => {
        response.json()
          .then((body) => {
            dispatch(createItemSuccess(body));
          });
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteItem = (itemId) => {
  return (dispatch) => {
    const url = `${host}/item/${itemId}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
      .then((response) => {
        console.log(response);
        dispatch(deleteItemSuccess(itemId));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export function doneItem(itemId) {
  return (dispatch) => {
    const url = `${host}/done/${itemId}`;
    fetch(url, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
      .then(response => {
        dispatch(doneItemSuccess());
        toastr.success("Done successful");
      })
      .catch(error => {
        toastr.error("Something went wrong!");
        throw (error);
      });
  };
}


export const undoneItem = (itemId) => {
  return  (dispatch) => {
    const url = `${host}/undone/${itemId}`;
    fetch(url, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'dataType': 'json'
      }
    })
      .then(response => {
        dispatch(undoneItemSuccess());
      })
      .catch(error => {
        throw (error);
      });
  };
}
