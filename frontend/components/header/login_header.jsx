import React from 'react';
import {Link, withRouter } from 'react-router';

class LoginHeader extends React.Component {


  render() {
    const membershipText = "Already a member?";
    return (
      <header className="header">
        <nav className="header-nav group">
          <h1 className="header-logo">
            <a href="/">
              <span className="good">good</span>
              <span className="books">Books</span>
            </a>
          </h1>

          <p className="header-button">{membershipText}
            <Link to="/login"><button>log in</button></Link>
          </p>
        </nav>
      </header>
    );
  }

}

export default withRouter(LoginHeader);
