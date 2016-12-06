import { connect } from 'react-redux';
import LoggedInHeader from './logged_in_header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    logout: () => dispatch(logout),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader);
