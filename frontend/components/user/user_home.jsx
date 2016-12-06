import React from 'react';
import { withRouter } from 'react-router';
import LoggedInHeaderContainer from '../header/logged_in_header_container';

class UserHome extends React.Component {

  render() {
    return (
    <div className = "userDive">
      <LoggedInHeaderContainer />
      <h1>hi</h1>
    </div>
    );
  }
}

export default withRouter(UserHome);
