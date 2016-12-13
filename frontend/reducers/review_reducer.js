import { merge } from 'lodash';
import { RECEIVE_REVIEW } from '../actions/review_actions';

const initialState = {
  review: null
};

const ReviewReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW:
    newState.review = action.review;
    return newState;

    default:
      return state;
  }
};

export default ReviewReducer;
