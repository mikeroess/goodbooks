import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LoadingReducer from './loading_reducer';
import ShelfReducer from './shelf_reducer';
import BookReducer from './book_reducer';
import ReviewReducer from './review_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  loading: LoadingReducer,
  shelves: ShelfReducer,
  books: BookReducer,
  review: ReviewReducer
});

export default rootReducer;
