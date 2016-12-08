import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser,
          currentUserId: session.userId,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors};
};

export default connect(mapStateToProps)(Splash);
