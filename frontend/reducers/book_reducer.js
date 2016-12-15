import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_BOOKS, RECEIVE_BOOK_DETAIL, RECEIVE_SHELVES,
  RECEIVE_READERS, RECEIVE_SHELF_DETAIL_UPDATE, RECEIVE_SHELF_DETAIL } from '../actions/book_actions';
const initialState = {
  errors: [],
  books: [],
  bookDetails: {},
  readers: [],
};

//
// case RECEIVE_SHELVES:
//   newState.shelves = action.shelves;
//   return newState;


const BookReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_SHELF_DETAIL_UPDATE:
      newState.bookDetails = action.update.bookDetails;
      newState.books = action.update.books;
      return newState;

    case RECEIVE_SHELF_DETAIL:
      newState.books = action.shelfDetail.books;
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case RECEIVE_BOOKS:
      newState.books = action.books;
      return newState;

    case RECEIVE_BOOK_DETAIL:
      newState.bookDetails = action.bookDetails;
      return newState;

    default:
      return state;
  }
};

export default BookReducer;
