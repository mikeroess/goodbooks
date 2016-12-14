import { connect } from 'react-redux';
import ReadStatusForm from './read_status_form';
import { updateReadStatus } from '../../actions/read_status_actions';

const mapStateToProps = ({ session, readStatuses }) => {
  return {session: session,
          readStatuses: readStatuses.readStatuses
      };
};

const mapDispatchToProps = (dispatch) => {
    return {
      updateReadStatus: (readStatus, id) => dispatch(updateReadStatus(readStatus, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadStatusForm);
