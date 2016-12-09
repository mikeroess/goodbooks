import * as APIUtil from '../util/book_api_util';

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

export const receiveBookDetail = (bookDetail) => {
  return {
    type: RECEIVE_BOOK_DETAIL,
    bookDetail
  };
};

export const recieveReaders = (readers) => {
  return {
    type: RECEIVE_READERS,
    readers
  };
};