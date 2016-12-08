import * as APIUtil from '../util/shelf_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SHELVES = "RECEIVE_SHELVES";
export const RECEIVE_SHELF_DETAIL = "RECEIVE_SHELF_DETAIL";

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const receiveShelves = (shelves) => {
  return {
    type: RECEIVE_SHELVES,
    shelves
  };
};

export const receiveShelfDetail = (shelfDetail) => {
  return {
    type: RECEIVE_SHELF,
    shelfDetail
  };
};

export const fetchShelves = (user_id) => {
  return (dispatch) => {
    return APIUtil.fetchShelves(user_id)
    .then(shelves => dispatch(receiveShelves(shelves))),
    error => dispatch(receiveErrors(error.responseJSON));
  };
};
// fetch shelves

// recieve_shelf

// remove_shelf
