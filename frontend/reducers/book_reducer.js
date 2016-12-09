import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_BOOKS, RECEIVE_BOOK_DETAIL, RECEIVE_SHELVES,
  RECEIVE_READERS } from './../actions/book_actions';
const initialState = {
  errors: [],
  books: [],
  bookDetails: {},
  shelves: [],
  readers: [],
};

const BookReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case RECEIVE_BOOKS:
      newState.books = action.books;
      return newState;

    case RECEIVE_BOOK_DETAIL:
      newState.bookDetails = action.bookDetails;
      return newState;

    case RECEIVE_SHELVES:
      newState.shelves = action.shelves;
      return newState;

    case RECEIVE_READERS:
      newState.readers = action.readers;
      return newState;

    default:
      return state;
  }
};

export default BookReducer;
