import React from 'react';

class ReviewDetail extends React.Component {



  render() {
    return(
      <article className="reviewDetail">
        <div className="reviewHeader group">
          <span className="reviewAuthor">{this.props.review.authorName}</span>
          <span className="reviewTitle">{ this.props.review.title }</span>
        </div>

        <p className="reviewBody">{ this.props.review.body }</p>
      </article>
    );
  }

}

export default ReviewDetail;
