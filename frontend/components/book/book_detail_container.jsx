import { connect } from 'react-redux';
import BookDetail from './book_detail';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = ( { shelves, session, review, books, readStatuses }) => {
  return {
    bookDetails: books.bookDetails,
    reader: books.readers,
    booksShelves: books.bookDetails.shelves,
    userShelves: shelves.shelves,
    review: review.review,
    currentUsername: session.currentUser.username,
    readStatuses: readStatuses.readStatuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
