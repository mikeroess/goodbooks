import React from 'react';
import Footer from './splash_footer';
import { hashHistory, withRouter } from 'react-router';
import SignupHeader from '../header/signup_header';


class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: "",
    };
    this.guestLogin = this.guestLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentWillMount() {
    if (this.props.loggedIn) {
      hashHistory.push("/user");
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.login({user: this.state})
  .then(() => hashHistory.push("/user/books"));
}

guestLogin(e) {
  e.preventDefault();
  this.props.login({user: {email: "mwr", password: "password"}})
  .then(() => hashHistory.push("/user/books"));
}

renderErrors() {
  if (typeof(this.props.errors) === "undefined") {
    return;
  } else {
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
}




  render(){
    return (
      <div>
        <SignupHeader />
        <div className="authContainer">
          <form className="authForm">
            { this.renderErrors() }

            <div className="fieldparagraph">
              <label>Email Address:</label>
                <input type="text"
                  value={ this.state.email }
                  placeholder="you@yours"
                  onChange={ this.handleInput("email") } />
            </div>

            <div className="fieldparagraph">
              <label> Password: </label>
                <input type="password"
                  placeholder="password"
                  value={ this.state.password }
                  onChange={ this.handleInput("password") } />
            </div>


            <div className="buttonContainer">
              <button onClick={(e) => this.handleSubmit(e)}>
                Login
              </button>


              <button onClick={(e) => this.guestLogin(e)}>
                Guest Account
              </button>
            </div>
          </form>

        </div>
      </div>
    );
      }
    }

export default withRouter(AuthForm);
