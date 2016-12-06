import React from 'react';
import { login } from '../../util/session_api_util';
import Footer from './splash_footer';


class AuthForm extends React.Component {

  render(){
    if (this.props.loggedIn {
      return (
        <p>Welcome, { this.props.currentUser.username }!
      This will be replaced with a redirect soon!</p>
      );
    } else {
      return (
        <div className="splash">
          <form className="authForm" onSubmit={() => login({user: this.state})}>
            <label>Email:

              <input type="text"
                value={this.state.email}
                onChange={this.handleInput("email")} />
            </label>

            <label>
              Password:
              <br />
              <input type="password" value={this.state.password}
                onChange={this.handleInput("password")} />
            </label>

            <button>Sign in</button>
          </form>
          <Footer />
        </div>
      );
    }
  }
}

export default AuthForm;
