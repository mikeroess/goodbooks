import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_SHELF_DETAIL, RECEIVE_SHELF_DETAIL_UPDATE,
  RECEIVE_SHELVES, RECEIVE_SHELF_OWNER, RECEIVE_SHELF, REMOVE_SHELF} from '../actions/shelf_actions';

const initialState = {
  shelfOwner: {},
  shelves: {},
  shelfDetail: {},
  errors: []
};

//
// case RECEIVE_SHELF_OWNER:
//   newState.shelfOwner = action.shelfOwner;
//   return newState;


const ShelfReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_SHELF_DETAIL_UPDATE:
      newState.shelves = action.update.shelves;
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case RECEIVE_SHELF_DETAIL:
      newState.shelfDetail = action.shelfDetail.shelf;
      return newState;

    case RECEIVE_SHELVES:
      newState.shelves = action.shelves;
      return newState;

    case RECEIVE_SHELF:
      newState.shelves.push(action.shelf);
      return newState;

      case REMOVE_SHELF:
        const newShelves = newState.shelves.filter(
          (shelf) => shelf.shelfId !== action.shelf.shelfId);
         newState.shelves = newShelves;
         return newState;

      default:
        return state;
  }
};

export default ShelfReducer;
