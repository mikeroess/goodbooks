import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { clearErrors, login, loginGuest } from '../../actions/session_actions';
import { receiveLoading } from '../../actions/loading_actions';

const mapStateToProps = ({ session, loading }) => {
  return {currentUser: session.currentUser,
          currentUserId: session.userId,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors,
          };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: (user) => dispatch(login(user)),
    loginGuest: () => dispatch(loginGuest()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
