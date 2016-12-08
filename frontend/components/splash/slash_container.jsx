import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser,
          currentUser_id: session.user_id,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors};
};

export default connect(mapStateToProps)(Splash);
