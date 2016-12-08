import * as APIUtil from '../util/shelf_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SHELVES = "RECEIVE_SHELVES";
export const RECEIVE_SHELF_DETAIL = "RECEIVE_SHELF_DETAIL";
export const RECEIVE_SHELF_OWNER = "RECEIVE_SHELF_OWNER";
export const RECEIVE_SHELF = "RECEIVE_SHELF";

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
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


export const receiveShelfDetail = (shelf) => {
  return {
    type: RECEIVE_SHELF,
    shelf
  };
};

export const createShelfAction = (shelf) => {
  return (dispatch) => {
    return APIUtil.createShelf(shelf)
      .then(newShelf => dispatch(receiveShelf(newShelf)),
      error => dispatch(receiveErrors(error.reseponseJSON)));
  };
};

export const fetchShelves = (userId) => {
  return (dispatch) => {
    return APIUtil.fetchShelves()
    .then(shelves => dispatch(receiveShelves(shelves)),
    error => dispatch(receiveErrors(error.responseJSON)));
  };
};

// remove_shelf
