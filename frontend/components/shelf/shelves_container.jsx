import { connect } from 'react-redux';
import Shelves from './shelves';
import { fetchShelves } from '../../actions/shelf_actions';

const mapStateToProps = ({ session, shelves}) => {
  return { currentUser: session.currentUser,
          shelfDetail: shelves.shelfDetail,
          shelves: shelves.shelves,
          errors: shelves.errors,
          shelfOwner: shelves.shelfOwner
          };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelves: (userId) => dispatch(fetchShelves(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);
