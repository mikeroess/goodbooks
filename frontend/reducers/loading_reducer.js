import { merge } from 'lodash';
import { RECEIVE_LOADING, receiveLoading, RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/loading_actions';

const initialState = {
  loading: false
};

const LoadingReducer = (state = initialState, action ) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LOADING:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ERRORS:
      newState.loading = action.loading;
      return newState;
    default:
      return state;
  }
};

export default LoadingReducer;
