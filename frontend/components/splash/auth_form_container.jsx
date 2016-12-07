import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { clearErrors, login, loginGuest } from '../../actions/session_actions';
import { receiveLoading } from '../../actions/loading_actions';

const mapStateToProps = ({ session, loading }) => {
  return {currentUser: session.currentUser,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors,
          loadingState: loading.loading};

};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: (user) => dispatch(login(user)),
    loginGuest: () => dispatch(loginGuest()),
    clearErrors: () => dispatch(clearErrors()),
    loading: (loading) => dispatch(receiveLoading(loading))
  };



};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
