import React from 'react';
import {Link, withRouter } from 'react-router';

class SignupHeader extends React.Component {


  render() {
    const membershipTest = "Not a member?";
    return (
      <header className="header">
        <nav className="header-nav group">
          <h1 className="header-logo">
            <a href="/">
              <span className="good">good</span>
              <span className="books">Books</span>
            </a>
          </h1>

          <p className="header-button">{membershipTest}
            <Link to="/signup"><button>sign-up</button></Link>
          </p>
        </nav>
      </header>
    );
  }

}

export default withRouter(SignupHeader);
