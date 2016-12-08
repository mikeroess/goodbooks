import { connect } from 'react-redux';
import Shelves from './shelves';

const mapStateToProps = ({ session }) => {
  return { currentUser: session.currentUser,
          currentUser_id: session.user_id,
          };
};

export default connect(mapStateToProps)(Shelves);
