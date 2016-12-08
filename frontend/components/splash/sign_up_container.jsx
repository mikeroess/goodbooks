import { connect } from 'react-redux';
import SignUp from './sign_up';
import { clearErrors, login, signup } from '../../actions/session_actions';
import { receiveLoading } from '../../actions/loading_actions';

const mapStateToProps = ({ session, loading }) => {
  return {currentUser: session.currentUser,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors
          };

};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };



};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
