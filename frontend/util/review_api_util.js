export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: review
  });
};

export const updateReview = (review, reviewId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${reviewId}`,
    data: review
  });
};


export const destroyReview = (reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`,
  });
};
//
// export const fetchReview = (reviewId) => {
//   return $.ajax({
//     method: "GET",
//     url: ,
//     data: reviewId
//   });
// };
