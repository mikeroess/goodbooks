import React from 'react';
import { Link, withRouter } from 'react-router';

class BookIndexItem extends React.Component {

  render() {
    const linkPath = `user/books/${this.props.book.bookId}`;
    return(
      <ul className="bookIndexItem group">
        <li className="cover-image-col"><Link to={ linkPath } className="bookIndexLink"></Link><img src={this.props.book.coverUrl} /></li>
        <li className="title-col"><Link to={ linkPath } className="bookIndexLink">{this.props.book.title}</Link></li>
        <li className="author-col"><Link to={ linkPath } className="bookIndexLink">{this.props.book.authorName } </Link></li>
      </ul>
    );
  }

}

export default BookIndexItem;
