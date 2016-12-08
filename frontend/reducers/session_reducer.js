import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER}
  from '../actions/session_actions';

const initialState = {
  currentUser: null,
  user_id: 0,
  errors: []
};

const SessionReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;

    default:
      return state;
  }
};


export default SessionReducer;
