import { connect } from 'react-redux';
import { updateReview, destroyReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ review }) => {
    if (review.review !== null) {
    return { title: review.review.title,
      body: review.review.body,
      id: review.review.reviewId,
      review: review.review,
      errors: review.errors };
  } else {
    return {
      title: "",
      body: "",
      errors: review.errors
    };
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      submitReview: (review, reviewId) => dispatch(updateReview(review, reviewId)),
      deleteReview: (reviewId) => dispatch(destroyReview(reviewId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
