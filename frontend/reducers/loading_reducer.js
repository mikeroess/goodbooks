import { merge } from 'lodash';
import { RECEIVE_LOADING, receiveLoading} from '../actions/loading_actions';

const initialState = {
  loading: false
};

const LoadingReducer = (state = initialState, action ) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LOADING:
      newState.loading = action.loading;
      return newState;
    default:
      return state;
  }
};

export default LoadingReducer;
