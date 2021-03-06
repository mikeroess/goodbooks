import { connect } from 'react-redux';
import UserHome from './user_home';
import { receiveLoading } from '../../actions/loading_actions';
import { fetchReadStatuses } from '../../actions/read_status_actions';

const mapStateToProps = ({ readStatuses, session, loading}) => {
  return {currentUser: session.currentUser,
          loadingState: loading,
          readStatuses: readStatuses.readStatuses};
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    loading: (loadAction) => dispatch(receiveLoading(loadAction)),
    fetchReadStatuses: () => dispatch(fetchReadStatuses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
