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

          <div className="header-button group">
            <span className="topRightText">{membershipText}</span>
            <Link to="/login"><button>Sign up</button></Link>
          </div>
          
        </nav>
      </header>
    );
  }

}

export default withRouter(LoginHeader);
