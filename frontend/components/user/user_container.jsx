import { connect } from 'react-redux';
import UserHome from './user_home';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
};

const mapDispatchToProps = (dispatch, { location }) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
