import React from 'react';
import { withRouter } from 'react-router';

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: "",
      body: "",
      book_id: this.props.params.bookId
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitReview = this.submitReview.bind(this);
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
      debugger
      this.props.createReview(submission);
    };
  }

  render () {
    return (
      <form className="createReviewForm" onSubmit={this.submitReview()}>

        <div className="createReviewTitle">
          <label>Title</label>
          <input type="text" value={this.state.title} onChange={this.handleInput("title")}/>
        </div>

        <div className="createReviewBody">
          <label>Review</label>
          <input type="textArea" value={this.state.body} onChange={this.handleInput("body")}/>
        </div>

        <button>Submit Review</button>

      </form>
    );
  }
}

export default withRouter(CreateReview);
