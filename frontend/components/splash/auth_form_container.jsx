import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, logout, loginGuest } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors};

};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    loginGuest: () => dispatch(loginGuest()),
  };



};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
