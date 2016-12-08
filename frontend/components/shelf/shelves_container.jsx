import { connect } from 'react-redux';
import Shelves from './shelves';
import { fetchShelves, createShelf} from '../../actions/shelf_actions';

const mapStateToProps = ({ session, shelves}) => {
  return { currentUser: session.currentUser,
          currentUserId: session.userId,
          shelfDetail: shelves.shelfDetail,
          shelves: shelves.shelves,
          errors: shelves.errors,
          shelfOwner: shelves.shelfOwner
          };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelves: (userId) => dispatch(fetchShelves(userId)),
    createShelf: (userId, shelf) => dispatch(createShelf(userId, shelf))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);
