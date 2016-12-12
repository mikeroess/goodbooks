import * as APIUtil from '../util/shelved_book_api_util';
import { fetchShelves } from './shelf_actions';
import { fetchBook, fetchAllBooks } from './book_actions';

export const UPDATE_BOOKSHELVES = "UPDATE_BOOKSHELVES";

export const updateBookshelves = (shelfUpdates) => {
  return (dispatch) => {
    return APIUtil.updateBookshelves(shelfUpdates)
    .then((bookId) => fetchBook(bookId),
    error => console.log(error))
    .then(() => fetchShelves())
    .then(() => fetchAllBooks());
  };
};
