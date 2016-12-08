import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LoadingReducer from './loading_reducer';
import ShelfReducer from './shelf_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  loading: LoadingReducer,
  shelves: ShelfReducer
});

export default rootReducer;
