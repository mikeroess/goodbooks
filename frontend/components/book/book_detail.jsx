import React from 'react';
import { withRouter } from 'react-router';

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
          <div className="coverAndReadStatus"></div>
            <img src={this.props.bookDetails.coverUrl} />

          <div className="textDetails">
            <p><h2>{this.props.bookDetails.title}</h2>
            by: {this.props.bookDetails.authorName}
            </p>
            <p>{this.props.bookDetail.blurb}</p>
          </div>
        </section>

        <section className="BookDetailReviews">
          <div className="MyReview"></div>
          <div className="otherReviews"></div>
        </section>

      </section>
    );
  }
}

export default withRouter(BookDetail);
