import { connect } from 'react-redux';
import ShelfDetail from './shelf_detail';
import { fetchShelf } from '../../actions/shelf_actions';


const mapStateToProps = ( { shelves }) => {
  return{
    shelfDetail: shelves.shelfDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelf: (shelfId) => dispatch(fetchShelf(shelfId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfDetail);
