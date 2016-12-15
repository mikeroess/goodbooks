import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ review }) => {
  return {title: "",
        body: "",
        review: review.review };
};

const mapDispatchToProps = (dispatch) => {
    return {
      submitReview: (review) => dispatch(createReview(review))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
