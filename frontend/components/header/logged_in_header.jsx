import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';

class LoggedInHeader extends React.Component {


  render() {
    return (
      <header className="header">
        <nav className="header-nav group">
          <h1 className="header-logo">
            <a href="/">
              <span className="good">good</span>
              <span className="books">Books</span>
            </a>
          </h1>

          <p className="header-button">
            <button onClick={this.props.logout()}>Sign out</button>
          </p>
        </nav>
      </header>
    );
  }

}

export default withRouter(LoggedInHeader);
