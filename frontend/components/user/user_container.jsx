import { connect } from 'react-redux';
import UserHome from './user_home';
import { receiveLoading } from '../../actions/loading_actions';

const mapStateToProps = ({ session, loading}) => {
  return {currentUser: session.currentUser,
          currentUserId: session.userId,
          loadingState: loading};
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    loading: (loadAction) => dispatch(receiveLoading(loadAction))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
