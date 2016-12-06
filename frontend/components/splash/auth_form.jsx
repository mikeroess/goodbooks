import React from 'react';
import Footer from './splash_footer';
import { withRouter } from 'react-router';
import SignupHeader from '../header/signup_header';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: ""
    };
  }

  handleInput(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
}



  render(){
    if (this.props.loggedIn) {
      return (
        <p>Welcome, { this.props.currentUser.username }!
      This will be replaced with a redirect soon!</p>
      );
    } else {
      return (
        <div>
          <SignupHeader />
          <form className="authForm" onSubmit={() => this.props.login({user: this.state})}>
            <h1>{ this.props.currentUser }</h1>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.handleInput("email")} />
            </label>

            <label>
              Password:
              <input type="password" value={this.state.password}
                onChange={this.handleInput("password")} />
            </label>

            <button>Sign In!</button>
          </form>
          <Footer />
        </div>
      );
    }
  }
}

export default withRouter(AuthForm);
