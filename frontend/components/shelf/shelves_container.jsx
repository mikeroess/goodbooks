import { connect } from 'react-redux';
import Shelves from './shelves';
import { fetchShelves, destroyShelf, fetchShelf } from '../../actions/shelf_actions';
import { receiveLoading } from '../../actions/loading_actions';

const mapStateToProps = ({ session, shelves, loading}) => {
  return { currentUser: session.currentUser,
          shelfDetail: shelves.shelfDetail,
          shelves: shelves.shelves,
          errors: shelves.errors,
          shelfOwner: shelves.shelfOwner,
          loading: loading
          };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelves: () => dispatch(fetchShelves()),
    setLoading: (newLoadingState) => dispatch(receiveLoading(newLoadingState)),
    destroyShelf: (shelfId) => dispatch(destroyShelf(shelfId)),
    // fetchShelf: (shelfId) => dispatch(fetchShelf(shelfId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);
