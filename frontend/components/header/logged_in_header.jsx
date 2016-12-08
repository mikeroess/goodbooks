import React from 'react';
import { hashHistory, Link, withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';

class LoggedInHeader extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.logout().then(() => hashHistory.push("/login"));
  }

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
            <button onClick={this.handleClick}>Sign out</button>
          </p>
        </nav>
      </header>
    );
  }

}

export default withRouter(LoggedInHeader);
