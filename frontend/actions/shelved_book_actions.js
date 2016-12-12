import * as APIUtil from '../util/shelved_book_api_util';
import { receiveShelves } from './shelf_actions';
import { recieveBooks, receiveBookDetail} from './book_actions';

export const UPDATE_BOOKSHELVES = "UPDATE_BOOKSHELVES";

export const updateBookshelves = (shelfUpdates) => {
  return (dispatch) => {
    return APIUtil.updateBookshelves(shelfUpdates)
    .then((update) => {
      dispatch(recieveBooks(update["books"]));
      dispatch(receiveShelves(update["shelves"]));
      dispatch(receiveBookDetail(update["bookDetails"]));
      console.log("update received");
    },
    error => console.log(error));
  };
};
