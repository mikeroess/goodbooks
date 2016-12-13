import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const createReview = (review) => {
  return (dispatch) => {
    return APIUtil.createReview(review)
      .then((createdReview) => dispatch(createReview(createdReview)),
      (err) => console.log(err));
  };
};

export const updateReview = (review) => {
  return (dispatch) => {
    return APIUtil.updateReview(review)
      .then( (updatedReview) => dispatch(receiveReview(updateReview)),
      (error) => console.log(error));
  };
};

export const destroyReview = (reviewId) => {
  return (dispatch) => {
    return APIUtil.destroyReview(reviewId)
      .then( () => dispatch(receiveReview(null)),
      (error) => console.log(error));
  };
};
