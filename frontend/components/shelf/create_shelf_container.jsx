import { connect } from 'react-redux';
import CreateShelfComponent from './create_shelf';
import { createShelfAction, receiveShelf } from '../../actions/shelf_actions';

const mapStateToProps = ({session, shelves}) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createShelf: (shelf) => dispatch(createShelfAction(shelf)),
    receiveShelf: (shelf) => dispatch(receiveShelf(shelf))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateShelfComponent);
