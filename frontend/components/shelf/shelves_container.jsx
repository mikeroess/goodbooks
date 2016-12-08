import { connect } from 'react-redux';
import Shelves from './shelves';
import { fetchShelves } from '../../actions/shelf_actions';

const mapStateToProps = ({ session, shelves}) => {
  return { currentUser: session.currentUser,
          currentUser_id: session.user_id,
          shelfDetail: shelves.shelfDetail,
          shelves: shelves.shelves,
          errors: shelves.errors,
          shelfOwner: shelves.shelfOwner
          };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelves: (user_id) => dispatch(fetchShelves(user_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);
