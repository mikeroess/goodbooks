import { merge } from 'lodash';
import { RECEIVE_SHELVES, RECEIVE_LOADING, receiveLoading,
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS, REQUEST_ALL_SHELVES}
  from '../actions/loading_actions';

const initialState = {
  loading: false
};

const LoadingReducer = (state = initialState, action ) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LOADING:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ERRORS:
    case RECEIVE_SHELVES:
      return Object.assign(newState, { loading: false});
    case REQUEST_ALL_SHELVES:
      return Object.assign(newState, { loading: true});
    default:
      return state;
  }
};

export default LoadingReducer;
