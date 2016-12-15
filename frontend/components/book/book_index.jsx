import React from 'react';
import { Link, withRouter} from 'react-router';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchShelves();
    console.log("I did mount");
  }

  componentWillUnmount(){
    console.log("I will unmount");
  }

          // { this.props.children }

  render() {
    const shelves = this.props.shelves;
    const books = this.props.books;
    let booksContent = <div></div>;
    if ( books.length > 1) {
      booksContent = books.map((book) => {
        let newKey = `${this.props.prekey} ${book.bookId}`;
        return <BookIndexItem key={newKey} book={book} shelves={shelves} />;
      });
    }
    return(
      <section className="booksIndex">
          <ul className="booksIndexHeader group">
            <li className="cover-col-header">cover</li>
            <li className="title-col">title</li>
            <li className="author-col">author</li>
            <li className="shelves-col">shelves</li>
            <li className="read-status-col">status</li>
          </ul>
          { booksContent }

    </section>
    );
  }
}


export default withRouter(BookIndex);
