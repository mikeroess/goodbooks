import React from 'react';
import { withRouter } from 'react-router';
import AddToShelfContainer from '../forms/add_to_shelf_container';
import CreateReviewContainer from '../forms/create_review_container';
import ReviewDetail from '../review/review_detail';
import UpdateReviewContainer from '../forms/update_review_container';
import ReadStatusContainer from '../forms/read_status_form_container';
// import ReadStatusForm from '../forms/read_status_form'

class BookDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayReview: false,
      displayShelves: false,
      displayStatus: false
    };
    this.displayReviewClick = this.displayReviewClick.bind(this);
    this.displayShelvesClick = this.displayShelvesClick.bind(this);
    this.displayCurrentShelves = this.displayCurrentShelves.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.review !== nextProps.review) {
      this.setState({displayReview: false,
        displayShelves: false,
        displayStatus: false});
    }
  }

  displayReviewClick() {
    this.setState({displayReview: !this.state.displayReview});
  }

  displayShelvesClick() {
    this.setState({displayShelves: !this.state.displayShelves});
  }

  displayCurrentShelves() {
    const shelves = this.props.userShelves.map((shelf) => {
      if (this.props.booksShelves.includes(shelf.shelfId)) {
        return <li key={shelf.shelfId}>{shelf.title}</li>;
      }
    });
    return(<ul>
      {shelves}
    </ul>);
  }

  render() {
    if (typeof(this.props.bookDetails) === 'undefined') {
      return (<div></div>);
    }

const currentReviewForm = (this.props.review === null) ? <CreateReviewContainer /> : <UpdateReviewContainer />;

let myReview;
if (this.props.review !== null) {
  let thisKey=`myReview-${this.props.review.id}`;
  myReview = <ReviewDetail key={thisKey} review={this.props.review} />;
}

let myShelves;
if (Array.isArray(this.props.userShelves) &&
    Array.isArray(this.props.booksShelves) &&
    this.props.userShelves.length > 0
    && this.props.booksShelves.length > 0) {
      myShelves = this.displayCurrentShelves();
    }

let reviews;
  if (typeof(this.props.bookDetails.reviews) !== 'undefined')
    reviews = this.props.bookDetails.reviews.map((review) => {
    return <ReviewDetail key={`reviewDetail-${review.reviewId}`} review={review} />;
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
            <p className="BookDetailBlurb">{this.props.bookDetails.blurb}</p>
          </div>

          <div className="ReadStatusList">
            <h4>Current Status</h4>
            <ReadStatusContainer bookId={this.props.params.bookId} />
          </div>

            <div className="bookDetailShelvesDiv group">
              <div className="UpdateshelvesList">
                <h4 id="BookDetailUpdateShelvesListMyShelvesHeader">My Shelves</h4>
                <AddToShelfContainer id="bookDetailsUpdateShelves"/>
              </div>



            </div>
          </div>
        </section>

        <section className="BookDetailReviews">
          <div className="MyReview">
            <div className="MyReviewHeader group">
              <h4>My Review</h4>
              <button className="displayReview" onClick={this.displayReviewClick}>{ this.state.displayReview ? "Back" : "Edit Review"}</button>
            </div>
            { this.state.displayReview ? currentReviewForm : myReview }
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
