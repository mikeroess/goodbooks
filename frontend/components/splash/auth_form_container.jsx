import React from 'react';
import { connect } from 'react-redux';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser,
          loggedIn: Boolean(session.currentUser),
          errors: session.errors};

};

const mapDispatchToProps = (dispactch, { location }) => ({
  // const logout = () => dispatch(logout()),
  // formType: location.pathname.slice(1),
  // process

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
