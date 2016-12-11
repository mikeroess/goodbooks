import { connect } from 'react-redux';
import BookIndex from './book_index';
import { fetchAllBooks } from '../../actions/book_actions';
import { fetchShelves } from '../../actions/shelf_actions';

const mapStateToProps = ( { shelves, books }) => {
  return {
    books: books.books,
    errors: books.errors,
    shelves: shelves.shelves
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    fetchShelves: () => dispatch(fetchShelves())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
