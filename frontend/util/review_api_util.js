export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: review
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.reviewId}`,
    data: review
  });
};


export const destroyReview = (reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`,
  });
};
