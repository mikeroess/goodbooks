import React from 'react';
import { Link, withRouter } from 'react-router';

class BookIndexItem extends React.Component {
  // constructor(props) {
  //   super(props)
  //   state: {
  //     shelves: []
  //   }
  // }


  render() {

    // const select_boxes =
    // debugger
    const linkPath = `user/books/${this.props.book.bookId}`;
    const imagePath = this.props.book.coverUrl;

    return(
      <ul className="bookIndexItem group">
        <li className="cover-image-col">
          <Link to={ linkPath } className="bookIndexLink"></Link>
          <img src={imagePath} />
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

        <form className="AddToShelf">
          // {this.props.shelves}
        </form>
      </ul>
    );
  }

}

export default withRouter(BookIndexItem);
