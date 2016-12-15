import { merge } from 'lodash';
import { RECEIVE_REVIEW, RECEIVE_ERRORS } from '../actions/review_actions';

const initialState = {
  review: null,
  errors: null,
};

const ReviewReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_REVIEW:
      newState.review = action.review;
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;


    default:
      return state;
  }
};

export default ReviewReducer;
