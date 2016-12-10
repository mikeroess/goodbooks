import React from 'react';
import { Link, withRouter} from 'react-router';
import BookIndexItem from './book_index_item';

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
        return <BookIndexItem key={book.bookId} book={book}/>;
      });
    }
    return(
      <section className="booksIndex">
          <ul className="booksIndexHeader group">
            <li className="cover-image-col">cover</li>
            <li className="title-col">title</li>
            <li className="author-col">author</li>
          </ul>
          { booksContent }
      { this.props.children }
    </section>
    );
  }
}


export default withRouter(BookIndex);
