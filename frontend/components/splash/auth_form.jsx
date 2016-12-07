import React from 'react';
import Footer from './splash_footer';
import { browserHitory, withRouter } from 'react-router';
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
  renderErrors() {
  return(
    <ul className="errorsList">
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`} className="errorMessage">
          {error}
        </li>
      ))}
    </ul>
  );
  }


  render(){
    if (this.props.loggedIn) {
      return (
        <p>redirecting</p>
      );
    } else {
      return (
        <div>
          <SignupHeader />
          <form className="authForm" onSubmit={() => this.props.login({user: this.state})}>
            {this.renderErrors()}
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

            <div className="buttonContainer group">
              <button>Log in</button> <button>Guest Account</button>
            </div>
          </form>
          <Footer />
        </div>
      );
    }
  }
}

export default withRouter(AuthForm);
