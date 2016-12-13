import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import CreateReview from './create_review';

const mapStateToProps = ({ review }) => {
  return {review: review};
};

const mapDispatchToProps = (dispatch) => {
    return {
      createReview: (review) => dispatch(createReview(review))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
