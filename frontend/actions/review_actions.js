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
      .then((createdReview) => dispatch(receiveReview(createdReview)),
      (err) => console.log(err));
  };
};

export const updateReview = (review, reviewId) => {
  return (dispatch) => {
    return APIUtil.updateReview(review, reviewId)
      .then( (updatedReview) => {
        dispatch(receiveReview(updatedReview));
      },
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

export const fetchReview = (bookId) => {
  return (dispatch) => {
    return APIUtil.fetchReview(bookId)
      .then( (review) =>  dispatch(receiveReview(review)),
        (error) => console.log(error));
  };
};
