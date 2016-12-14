import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBook } from '../../actions/book_actions';
// import { fetchReadStatuses } from '../../actions/read_status_actions';

const mapStateToProps = ( { session, review, books, readStatuses }) => {
  return {
    bookDetails: books.bookDetails,
    reader: books.readers,
    shelves: books.shelves,
    review: review.review,
    currentUsername: session.currentUser.username,
    readStatuses: readStatuses.readStatuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId))
    // fetchReadStatuses: () => dispatch(fetchReadStatuses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
