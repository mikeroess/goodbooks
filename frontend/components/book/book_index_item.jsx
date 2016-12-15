import React from 'react';
import { Link, withRouter } from 'react-router';
import UpdateShelvesIndexContainer from '../forms/update_shelves_index_container';
import ReadStatusContainer from '../forms/read_status_form_container';

class BookIndexItem extends React.Component {

  render() {
    const linkPath = `user/books/${this.props.book.bookId}`;
    const imagePath = this.props.book.coverUrl;

    let newKey = `updatedShelves${this.props.book.bookId}`;
    return(
      <ul className="bookIndexItem group">
        <li className="cover-col">
          <Link to={ linkPath } className="bookIndexLink">
            <img src={imagePath} />
          </Link>
        </li>

        <li className="title-col">
          <Link to={ linkPath } className="bookIndexLink">
            {this.props.book.title}
          </Link>
        </li>

        <li className="author-col">
          <Link to={ linkPath } className="bookIndexLink">
            {this.props.book.authorName }
          </Link>
        </li>

        <li className="shelves-col">
          <UpdateShelvesIndexContainer key={newKey} className="shelves-col" book={this.props.book} shelves={this.props.shelves} />
        </li>

        <li className="read-status-col">
          <ReadStatusContainer bookId={this.props.book.bookId} />
        </li>



      </ul>
    );
  }

}

export default withRouter(BookIndexItem);
