import { connect } from 'react-redux';
import CreateShelfComponent from './create_shelf';
import { createShelfAction } from '../../actions/shelf_actions';

const mapStateToProps = ({session, shelves}) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createShelf: (userId, shelf) => dispatch(createShelfAction(userId, shelf)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateShelfComponent);
