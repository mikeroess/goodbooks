import React from 'react';
import { withRouter } from 'react-router';
import { fetchReview } from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: this.props.title,
      body: this.props.body,
      book_id: this.props.params.bookId,
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.title !== nextProps.title) {
      const newState = {
        title: nextProps.title,
        body: nextProps.body,
        book_id: nextProps.params.bookId
      };
      this.setState(newState);
    }
  }

  handleInput(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submitReview() {
    return (e) => {
      e.preventDefault();
      const submission = {review: this.state};
      this.props.submitReview(submission, this.props.id);
    };
  }

  render () {
    return (
      <form className="createReviewForm" onSubmit={this.submitReview()}>

        <div className="createReviewTitle group">
          <label>Title</label>
          <input type="text" value={this.state.title} onChange={this.handleInput("title")}/>
          </div>

        <div className="createReviewBody">
          <label>Review</label>
          <input id="CreateReivewTextArea" type="textArea" value={this.state.body} onChange={this.handleInput("body")}/>
        </div>

        <button>Submit Review</button>

      </form>
    );
  }
}

export default withRouter(ReviewForm);
