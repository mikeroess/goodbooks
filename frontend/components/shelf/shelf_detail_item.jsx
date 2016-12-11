import React from 'react';


// <li className="avg-rating-col">detail_avg rating</li>
// <li className="rating-col">detail_rating</li>
// <li className="shelves-col">detail_shelves</li>


class ShelfDetailItem extends React.Component {


  render() {
    return(
      <ul className="shelfDetailItem group">
        <li className="cover-col"><img src={ this.props.bookDetail.coverImageUrl } /></li>
        <li className="title-col">{ this.props.bookDetail.title }</li>
        <li className="author-col">{ this.props.bookDetail.authorName}</li>
      </ul>
    );
  }
}

export default ShelfDetailItem;
