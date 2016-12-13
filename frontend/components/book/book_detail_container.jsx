import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = ( { session, review, books }) => {
  return {
    bookDetails: books.bookDetails,
    reader: books.readers,
    shelves: books.shelves,
    review: review.review,
    currentUsername: session.currentUser.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
