import React from 'react';
import { Link, withRouter} from 'react-router';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.books.length !== nextProps.books.length) {
      nextProps.fetchAllBooks();
    }
  }

  render() {
    const books = this.props.books;
    let booksContent;
    if ( books.length > 1) {
      booksContent = books.map((book) => {
        return <li key={book.bookId}> <img src={book.coverUrl} /> {book.title} {book.authorName }</li>;
      });
    }
    return(
      <ul  className="booksIndex">
        { booksContent }
        { this.props.children }
      </ul>
    );
  }
}

export default withRouter(BookIndex);
