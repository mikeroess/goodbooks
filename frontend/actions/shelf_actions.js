import * as APIUtil from '../util/shelf_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SHELVES = "RECEIVE_SHELVES";
export const RECEIVE_SHELF_DETAIL = "RECEIVE_SHELF_DETAIL";
export const RECEIVE_SHELF_OWNER = "RECEIVE_SHELF_OWNER";
export const RECEIVE_SHELF = "RECEIVE_SHELF";
export const REQUEST_ALL_SHELVES = "REQUEST_ALL_SHELVES";
export const REQUEST_A_SHELF = "REQUEST_A_SHELF";
export const REMOVE_SHELF = "REMOVE_SHELF";
export const RECEIVE_SHELF_DETAIL_UPDATE = "RECEIVE_SHELF_DETAIL_UPDATE";

export const receiveShelfDetailUpdate = (update) => {
  return {
    type: RECEIVE_SHELF_DETAIL_UPDATE,
    update
  };
};

export const recieveShelfDetail = (shelfDetail) => {
  return {
    type: RECEIVE_SHELF_DETAIL,
    shelfDetail
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const requestAllShelves = () => {
  return {
    type: REQUEST_ALL_SHELVES,
  };
};

export const requestAShelf = () => {
  return {
    type: REQUEST_A_SHELF,
  };
};

export const removeShelf = (shelf) => {
  return {
    type: REMOVE_SHELF,
    shelf
  };
};

export const receiveShelfOwner = (shelfOwner) => {
  return {
    type: RECEIVE_SHELF_OWNER,
    shelfOwner
  };
};

export const receiveShelves = (shelves) => {
  return {
    type: RECEIVE_SHELVES,
    shelves
  };
};
export const receiveShelf = (shelf) => {
  return {
    type: RECEIVE_SHELF,
    shelf
  };
};


export const receiveShelfDetail = (shelfDetail) => {
  return {
    type: RECEIVE_SHELF_DETAIL,
    shelfDetail
  };
};

export const destroyShelf = (shelfId) => {
  return (dispatch) => {
    return APIUtil.destroyShelf(shelfId)
      .then((shelf) => dispatch(removeShelf(shelf)),
      error => dispatch(receiveErrors(error.responseJSON)));
  };
};

export const createShelfAction = (shelf) => {
  return (dispatch) => {
    return APIUtil.createShelf(shelf)
      .then(newShelf => {
        dispatch(receiveShelf(newShelf));
      },
      error => dispatch(receiveErrors(error.responseJSON)));
  };
};

export const fetchShelves = () => {
  return (dispatch) => {
    dispatch(requestAllShelves());
    return APIUtil.fetchShelves()
    .then(shelves => dispatch(receiveShelves(shelves)),
    error => dispatch(receiveErrors(error.responseJSON)));
  };
};

export const fetchShelf = (shelfId) => {
  return (dispatch) => {
    dispatch(requestAShelf());
    return APIUtil.fetchShelf(shelfId)
      .then(shelf => {
        dispatch(receiveShelfDetail(shelf));
      }),
      error => dispatch(receiveErrors(error.responseJSON));
  };
};
