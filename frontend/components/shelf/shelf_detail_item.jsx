import React from 'react';
import { Link, withRouter } from 'react-router';
import UpdateShelvesIndexContainer from '../forms/update_shelves_index_container';

class ShelfDetailItem extends React.Component {


  render() {
    let bookPath = "";
    //
    //
    if (this.props.bookDetails !== "undefined") {
      bookPath = `user/books/${this.props.book.bookId}`;
    }
    return(
      <ul className="shelfDetailItem group">

        <li className="cover-col">
          <Link to={bookPath}>
            <img src={ this.props.book.coverUrl } />
            </Link>
        </li>

        <li className="title-col">
          <Link to={bookPath}>
            { this.props.book.title }
          </Link>
        </li>

        <li className="author-col">
          <Link to={bookPath}>
            { this.props.book.authorName}
          </Link>
        </li>

        <li className="shelves-col">
          <UpdateShelvesIndexContainer key={this.props.book.bookId} className="shelves-col" book={this.props.book} />
        </li>


      </ul>
    );
  }
}

export default withRouter(ShelfDetailItem);
