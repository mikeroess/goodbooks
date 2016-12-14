import React from 'react';
import { Link, withRouter } from 'react-router';
import UpdateShelvesIndexContainer from '../forms/update_shelves_index_container';

// <li className="avg-rating-col">detail_avg rating</li>
// <li className="rating-col">detail_rating</li>
// <li className="shelves-col">detail_shelves</li>


class ShelfDetailItem extends React.Component {


  render() {
    let bookPath = "";


    if (this.props.bookDetails !== "undefined") {
      bookPath = `user/books/${this.props.bookDetail.bookId}`;
    }
    return(
      <ul className="shelfDetailItem group">

        <li className="cover-col">
          <Link to={bookPath}>
            <img src={ this.props.bookDetail.coverUrl } />
            </Link>
        </li>

        <li className="title-col">
          <Link to={bookPath}>
            { this.props.bookDetail.title }
          </Link>
        </li>

        <li className="author-col">
          <Link to={bookPath}>
            { this.props.bookDetail.authorName}
          </Link>
        </li>

        <li className="shelves-col">
          <UpdateShelvesIndexContainer className="shelves-col" book={this.props.bookDetail} shelves={this.props.shelves} />
        </li>

      </ul>
    );
  }
}

export default withRouter(ShelfDetailItem);
