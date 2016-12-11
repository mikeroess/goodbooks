import React from 'react';
import { Link, withRouter } from 'react-router';

class BookIndexItem extends React.Component {
  // constructor(props) {
  //   super(props)
  //   state: {
  //     shelves: []
  //   }
  // }

  // <form className="AddToShelf">
  //   {this.props.shelves}
  // </form>


  render() {
    // debugger
    // const select_boxes =
    const linkPath = `user/books/${this.props.book.bookId}`;
    const imagePath = this.props.book.coverUrl;

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


      </ul>
    );
  }

}

export default withRouter(BookIndexItem);
