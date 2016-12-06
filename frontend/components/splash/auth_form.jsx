import React from 'react';
import { login } from '../../util/session_api_util';



class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: ""
    };
  }

  loggedIn() {
    return (this.props.currentUser === "null");
  }

  signup(){}

  handleInput(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
}



  render(){
    if (this.loggedIn()) {
      return (
        <p>Welcome, { this.props.currentUser.username }!
      This will be replaced with a redirect soon!</p>
      );
    } else {
      return (
        <form className="authForm" onSubmit={() => login({user: this.state})}>
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
      );
    }
  }
}

export default AuthForm;
