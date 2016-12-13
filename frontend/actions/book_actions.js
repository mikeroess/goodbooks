import * as APIUtil from '../util/book_api_util';
import { receiveReview } from './review_actions';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK_DETAIL = "RECEIVE_BOOK_DETAIL";
export const RECEIVE_READERS = "RECEIVE_READERS";

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const recieveBooks = (books) => {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const receiveBookDetail = (bookDetails) => {
  return {
    type: RECEIVE_BOOK_DETAIL,
    bookDetails
  };
};

export const recieveReaders = (readers) => {
  return {
    type: RECEIVE_READERS,
    readers
  };
};

export const fetchAllBooks = () => {
  return (dispatch) => {
    return APIUtil.fetchAllBooks()
      .then(books => dispatch(recieveBooks(books)),
      error => dispatch(receiveErrors(error.responseJSON)));
  };
};

export const fetchMyBooks = () => {
  return (dispatch) => {
    return APIUtil.fetchMyBooks()
    .then(books => dispatch(recieveBooks(books)),
    error => dispatch(receiveErrors(error.responseJSON)));
  };
};

export const fetchBook = (bookId) => {
  return (dispatch) => {
    return APIUtil.fetchBook(bookId)
      .then((update) => {
        dispatch(receiveReview(update["review"]));
        dispatch(receiveBookDetail(update["bookDetails"]));
      },
      error => dispatch(receiveErrors(error.responseJSON)));
  };
};
