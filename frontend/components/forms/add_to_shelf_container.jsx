import { connect } from 'react-redux';
import AddToShelf from './add_to_shelf';
import { fetchBook } from '../../actions/book_actions';
import { fetchShelves } from '../../actions/shelf_actions';
import  { updateBookshelves } from '../../actions/shelved_book_actions';

const mapStateToProps = ({ books, shelves }) => {
  return {
    userShelves: shelves.shelves,
    bookShelves: books.bookDetails.shelves,
    bookId: books.bookDetails.bookId,
    shelfIds: books.bookDetails.shelfIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBookshelves:
      (updatedShelves) => dispatch(updateBookshelves(updatedShelves)),
      fetchBook: (bookId) => dispatch(fetchBook(bookId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddToShelf);
