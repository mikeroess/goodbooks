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
            <button onClick={this.handleClick}><img className="userIcon" src='http://s3.amazonaws.com/goodbooks-standard/users/images/000/000/051/original/book-flat.png?1481300082'></img></button>
          </p>
        </nav>
      </header>
    );
  }

}

export default withRouter(LoggedInHeader);
