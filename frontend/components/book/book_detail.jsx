import React from 'react';
import { withRouter } from 'react-router';
import AddToShelfContainer from '../forms/add_to_shelf_container';
import CreateReviewContainer from '../forms/create_review_container';
import ReviewDetail from '../review/review_detail';
import UpdateReviewContainer from '../forms/update_review_container';


class BookDetail extends React.Component{

  componentDidMount() {
    this.props.fetchBook(this.props.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.bookId !== nextProps.params.bookId) {
      nextProps.fetchBook(nextProps.params.bookId);
    }
  }

  render() {
    if (typeof(this.props.bookDetails) === 'undefined') {
      return (<div></div>);
    }

    // const userHasReview = () => {
    //   debugger
    //   return (typeof(this.props.bookDetails.reviews) !== 'undefined' &&
    //   this.props.currentUsername === this.props.review.authorName
    // );
    // };
    // { userHasReview() ? <h4>Update Review!</h4> : <CreateReviewContainer />}

    let reviews;
      if (typeof(this.props.bookDetails.reviews) !== 'undefined')
        reviews = this.props.bookDetails.reviews.map((review) => {
        return <ReviewDetail key={review.id} review={review} />;
      });


      // if  {
      //   myReviewForm = <h4>Update Review!</h4>;
      //   } else {
      //     myReviewForm = ;
      //   }

      // { myReviewForm }

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
            <h4>My Review</h4>
            { (this.props.review === null) ? <CreateReviewContainer /> : <UpdateReviewContainer /> }
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
