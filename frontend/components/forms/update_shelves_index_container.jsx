import { connect } from 'react-redux';
import UpdateShelvesIndex from './update_shelves_index';
import { fetchBook } from '../../actions/book_actions';
import { fetchShelves } from '../../actions/shelf_actions';
import  { updateBookshelves } from '../../actions/shelved_book_actions';

const mapStateToProps = ({ }) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBookshelves:
      (updatedShelves) => dispatch(updateBookshelves(updatedShelves))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UpdateShelvesIndex);
