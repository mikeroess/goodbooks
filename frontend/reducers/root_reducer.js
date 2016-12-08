import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  loading: LoadingReducer
});

export default rootReducer;
