import React from 'react';
import Footer from './splash_footer';
import { withRouter } from 'react-router';

class SignUp extends React.Component {
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
    return (
      <div>
        <form className="authForm"
          onSubmit={() => this.props.signup({user: this.state})}>
          <h1>{ this.props.currentUser }</h1>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleInput("email")} />
          </label>

          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleInput("username")} />
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

export default withRouter(SignUp);
