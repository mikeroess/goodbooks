import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ review }) => {
    if (review.review !== null) {
    return { title: review.review.title,
      body: review.review.body,
      id: review.review.reviewId};
  } else {
    return {
      title: "",
      body: ""
    };
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      submitReview: (review, reviewId) => dispatch(updateReview(review, reviewId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
