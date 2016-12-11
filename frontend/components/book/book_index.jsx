import React from 'react';
import { Link, withRouter} from 'react-router';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBooks();
    this.props.fetchShelves();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.books.length !== nextProps.books.length) {
      nextProps.fetchAllBooks();
    }
    if (this.props.shelves.length !== nextProps.shelves.length) {
      nextProps.fetchShelves();
    }
  }

  render() {

    const shelves = this.props.shelves;
    const books = this.props.books;
    let booksContent = <div></div>;
    if ( books.length > 1) {
      booksContent = books.map((book) => {
        return <BookIndexItem key={book.bookId} book={book} shelves={shelves} />;
      });
    }
    return(
      <section className="booksIndex">
          <ul className="booksIndexHeader group">
            <li className="cover-col-header">cover</li>
            <li className="title-col">title</li>
            <li className="author-col">author</li>
          </ul>
          { booksContent }
    </section>
    );
  }
}


export default withRouter(BookIndex);
