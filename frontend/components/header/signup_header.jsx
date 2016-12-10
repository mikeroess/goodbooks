import React from 'react';
import {Link, withRouter } from 'react-router';

class SignupHeader extends React.Component {


  render() {
    const membershipText = "Not a member?";
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
            <Link to="/signup"><button>Sign up</button></Link>
          </div>

        </nav>
      </header>
    );
  }

}

export default withRouter(SignupHeader);
