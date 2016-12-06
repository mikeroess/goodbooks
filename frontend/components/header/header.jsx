import React from 'react';

class Header extends React.Component {



  // <ul className="header-list group">
  //   <li><a href=#></a></li>
  // </ul>

  render() {
    const notAMember = "Not a member?";
    return (
      <header className="header">
        <nav className="header-nav group">
          <h1 className="header-logo">
            <a href="/">
              <span className="good">good</span>
              <span className="books">Books</span>
            </a>
          </h1>

          <p className="sign-up">{notAMember}<button>Sign Up</button></p>
        </nav>
      </header>
    );
  }

}

export default Header;
