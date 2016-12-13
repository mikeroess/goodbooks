import React from 'react';
import { withRouter } from 'react-router';
import AddToShelfContainer from '../forms/add_to_shelf_container';
import CreateReviewContainer from '../forms/create_review_container';
import ReviewDetail from '../review/review_detail';
import UpdateReviewContainer from '../forms/update_review_container';


class BookDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    };
    this.displayReviewClick = this.displayReviewClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.review !== nextProps.review) {
      this.setState({displayForm: false});
    }
  }

  displayReviewClick() {
    this.setState({displayForm: !this.state.displayForm});
  }

  render() {
    if (typeof(this.props.bookDetails) === 'undefined') {
      return (<div></div>);
    }


const currentReviewForm = (this.props.review === null) ? <CreateReviewContainer /> : <UpdateReviewContainer />;
let myReview;
if (this.props.review !== null) {
  myReview = <ReviewDetail key={this.props.review.id} review={this.props.review} />;
}

let reviews;
  if (typeof(this.props.bookDetails.reviews) !== 'undefined')
    reviews = this.props.bookDetails.reviews.map((review) => {
    return <ReviewDetail key={review.id} review={review} />;
  });
    return(
      <section className="BookDetailMain">

        <section className="BookDetailBasics group">
          <div className="coverAndReadStatus">
            <img src={this.props.bookDetails.coverUrl} />
          </div>

          <div className="textDetails">
            <div className="bookDetailAuthor">
              <h2 className="bookDetailTitle">
                {this.props.bookDetails.title}
              </h2>
            by: {this.props.bookDetails.authorName}
          </div>

            <p className="BookDetailBlurb">{this.props.bookDetails.blurb}</p>
            <div className="bookDetailShelvesDiv group"></div>
            <AddToShelfContainer className="bookDetailsUpdateShelves"/>
          </div>
        </section>

        <section className="BookDetailReviews">
          <div className="MyReview">
            <div className="MyReviewHeader group">
              <h4>My Review</h4>
              <button className="displayReview" onClick={this.displayReviewClick}>{ this.state.displayForm ? "Back" : "Edit Review"}</button>
            </div>
            { this.state.displayForm ? currentReviewForm : myReview }
          </div>
          <div className="otherReviews">
            <h4>Other Reviews</h4>
            { reviews }
          </div>
        </section>

      </section>
    );
  }
}

export default withRouter(BookDetail);
