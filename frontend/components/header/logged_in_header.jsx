import React from 'react';
import { hashHistory, Link, withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import Modal from 'react-modal';

class LoggedInHeader extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.signOut()
    .then(() => { hashHistory.push("/"); },
      () => { hashHistory.push("/"); }

  );}

  render() {
    let imagePath = "";
    if (this.props.currentUser !== null) {
      imagePath = this.props.currentUser.imageUrl;
    }

    return (
      <header className="header">
        <nav className="header-nav group">
          <h1 className="header-logo">
            <Link to="/">
              <span className="good">good</span><span className="books">Books</span>
              </Link>
          </h1>

          <nav className="myBooksHeader">
            <Link to="user/myBooks">
              My Books
            </Link>
          </nav>


          <nav className="browse">
            <Link to="user/books">
              Browse
            </Link>
          </nav>

          <nav className="loggedInHeader-icon">
            <img className="userIcon group" src={imagePath}></img>
              <ul className="dropDown headerDropdown group">
                <li><Link onClick={this.handleClick}>Sign Out</Link></li>
              </ul>
          </nav>
        </nav>
      </header>
    );
  }

}

export default withRouter(LoggedInHeader);
