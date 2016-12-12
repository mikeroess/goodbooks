import { connect } from 'react-redux';
import AddToShelf from './add_to_shelf';
import { fetchBook } from '../../actions/book_actions';
import { fetchShelves } from '../../actions/shelf_actions';

const mapStateToProps = ({ books, shelves }) => {
  return {
    userShelves: shelves.shelves,
    bookShelves: books.bookDetails.shelves
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    fetchShelves: () => dispatch(fetchShelves())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddToShelf);
