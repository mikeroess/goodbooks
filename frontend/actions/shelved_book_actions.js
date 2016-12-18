import * as APIUtil from '../util/shelved_book_api_util';
import { receiveShelfDetailUpdate } from './shelf_actions';
// import { receiveShelfDetailUpdate} from './book_actions';

export const UPDATE_BOOKSHELVES = "UPDATE_BOOKSHELVES";

export const updateBookshelves = (shelfUpdates) => {
  return (dispatch) => {
    return APIUtil.updateBookshelves(shelfUpdates)
    .then((update) => {
      dispatch(receiveShelfDetailUpdate(update));
    },
    error => (error));
  };
};
