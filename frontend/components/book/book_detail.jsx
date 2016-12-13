import React from 'react';
import { withRouter } from 'react-router';
import AddToShelfContainer from '../forms/add_to_shelf_container';
import CreateReviewContainer from '../forms/create_review_container';



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
            <AddToShelfContainer />

          </div>
        </section>

        <section className="BookDetailReviews">
          <div className="MyReview"></div>
          <div className="otherReviews"></div>
          <CreateReviewContainer />
        </section>

      </section>
    );
  }
}

export default withRouter(BookDetail);
