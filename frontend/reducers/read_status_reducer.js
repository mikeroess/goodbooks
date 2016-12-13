import { merge } from 'lodash';
import { RECEIVE_READ_STATUSES } from '../actions/read_status_actions';

const initialState = {
  readStatuses: {}
};

const ReadStatusReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_READ_STATUSES:
      newState.readStatuses = action.readStatuses;
      return newState;

    default:
      return state;
  }
};


export default ReadStatusReducer;
