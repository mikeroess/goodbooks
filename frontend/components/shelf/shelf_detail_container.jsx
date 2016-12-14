import { connect } from 'react-redux';
import ShelfDetail from './shelf_detail';
import { fetchShelf, fetchShelves } from '../../actions/shelf_actions';
import { fetchAllBooks } from '../../actions/book_actions';

const mapStateToProps = ( { shelves, books }) => {
  return{
    shelfDetail: shelves.shelfDetail,
    shelves: shelves.shelves,
    books: books.books,
    key: "shelfdetail"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelf: (shelfId) => dispatch(fetchShelf(shelfId)),
    fetchBooks: () => dispatch(fetchAllBooks()),
    fetchShelves: () => dispatch(fetchShelves())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfDetail);
