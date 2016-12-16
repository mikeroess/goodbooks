import { connect } from 'react-redux';
import UpdateShelvesIndex from './update_shelves_index';
import { fetchBook } from '../../actions/book_actions';
import { fetchShelves, fetchShelf } from '../../actions/shelf_actions';
import  { updateBookshelves } from '../../actions/shelved_book_actions';

const mapStateToProps = ({ shelves }) => {
  return {
    userShelves: shelves.shelves
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: (shelfId) => dispatch(fetchShelf(shelfId)),
    updateBookshelves:
      (updatedShelves) => dispatch(updateBookshelves(updatedShelves))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UpdateShelvesIndex);
