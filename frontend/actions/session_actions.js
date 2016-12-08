import * as APIUtil from '../util/session_api_util';
import { receiveLoading } from './loading_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => {
  return (dispatch) => {
    receiveLoading({loading: true});
    return APIUtil.login(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      error => dispatch(receiveErrors(error.responseJSON))
    );
  };
};

export const gonLogin = (user) => {
  return(dispatch) => dispatch(receiveCurrentUser(user));
};

export  const logout = () => {
  return (dispatch) => {
    return APIUtil.logout()
      .then(currentUser => dispatch(receiveCurrentUser(null)),
      error => dispatch(receiveErrors(error.responseJSON))
    );
  };
};

export  const clearErrors = () => {
  return (dispatch) => {
    dispatch(receiveErrors([]));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(newUser => dispatch(receiveCurrentUser(newUser)),
      error => dispatch(receiveErrors(error.responseJSON))
    );
  };
};

export const loginGuest = () => {
  debugger
  return (dispatch) => {
    return APIUtil.login({user: {email: "mwr", password:"password"}})
      .then(user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON))
    );
  };
};
