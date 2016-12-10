import { connect } from 'react-redux';
import BookIndex from './Book_index';
import { fetchAllBooks } from '../../actions/book_actions';

const mapStateToProps = ( { books }) => {
  return {
    books: books.books,
    errors: books.errors
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
