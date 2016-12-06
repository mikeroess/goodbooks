import { connect } from 'react-redux';
import SignUp from './sign_up';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors};

};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    signup: (user) => dispatch(signup(user))
  };



};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
