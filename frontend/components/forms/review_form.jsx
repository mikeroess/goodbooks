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
      errors: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
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
      if (this.state.body === "") {
        this.setState({errors: true})
      } else {
        const submission = {review: this.state};
        this.props.submitReview(submission, this.props.id);
      }
    };
  }



  deleteReview() {
    return (e) => {
      e.preventDefault();
      this.props.deleteReview(this.props.id);
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
          <textArea id="CreateReivewTextArea" value={this.state.body} onChange={this.handleInput("body")}/>
        </div>


        { this.state.errors ? <div className="ReviewErrors">Body cannot be blank<br /></div> : <div></div> }
        <button>Submit Review</button>
        <button onClick={this.deleteReview()}>Delete Review</button>

      </form>
    );
  }
}

export default withRouter(ReviewForm);
