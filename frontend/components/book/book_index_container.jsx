import { connect } from 'react-redux';
import BookIndex from './book_index';
import { fetchAllBooks } from '../../actions/book_actions';
import { fetchShelves } from '../../actions/shelf_actions';

const mapStateToProps = ( { shelves, books }) => {
  return {
    books: books.books,
    errors: books.errors,
    shelves: shelves.shelves,
    prekey: "allBooks"
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchAllBooks()),
    fetchShelves: () => dispatch(fetchShelves())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
