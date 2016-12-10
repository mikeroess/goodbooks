import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = ( { books }) => {
  return {
    bookDetail: books.bookDetail
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
