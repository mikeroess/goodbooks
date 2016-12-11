import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_SHELF_DETAIL,
  RECEIVE_SHELVES, RECEIVE_SHELF_OWNER, RECEIVE_SHELF, REMOVE_SHELF} from '../actions/shelf_actions';

const initialState = {
  shelfOwner: {},
  shelves: {},
  shelfDetail: {},
  errors: []
};


const ShelfReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case RECEIVE_SHELF_DETAIL:
      newState.shelfDetail = action.shelfDetail;
      return newState;

    case RECEIVE_SHELVES:
      newState.shelves = action.shelves;
      return newState;

    case RECEIVE_SHELF_OWNER:
      newState.shelfOwner = action.shelfOwner;
      return newState;

    case RECEIVE_SHELF:
      newState.shelves.push(action.shelf);
      return newState;

      case REMOVE_SHELF:
        newState.shelves.filter(
          (shelf) => shelf.shelfId !== action.shelf.shelfId);
        return newState;

      default:
        return state;
  }
};

export default ShelfReducer;
