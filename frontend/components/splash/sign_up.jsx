import React from 'react';
import Footer from './splash_footer';
import { browserHitory, withRouter } from 'react-router';
import LoginHeader from '../header/login_header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: ""
    };
    // this.renderErrors = this.renderErrrors.bind(this);
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
        <LoginHeader />
        <form className="authForm"
          onSubmit={() => this.props.signup({user: this.state}).then(() => browserHitory.push("/user"))}>
            <section className="authFormFields">
              {this.renderErrors()}
              <label>Email Address:
              <input type="text" placeholder="you@yours"
                value={this.state.email}
                onChange={this.handleInput("email")} />
              </label>

              <label>Username:
                <input type="text" placeholder="name"
                  value={this.state.username}
                  onChange={this.handleInput("username")} />
              </label>

              <label>
                Password:
                <input type="password" value={this.state.password}
                  onChange={this.handleInput("password")} />
              </label>

            <div className="buttonContainer group">
              <button>Sign up</button> <button>Guest Account</button>
            </div>
          </section>
        </form>
        <Footer />
      </div>
      );
    }
  }
}

export default withRouter(SignUp);
