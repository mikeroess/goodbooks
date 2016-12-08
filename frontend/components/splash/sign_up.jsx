import React from 'react';
import Footer from './splash_footer';
import { hashHistory, withRouter } from 'react-router';
import LoginHeader from '../header/login_header';
import Loader from 'react-loader';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: "",
      loading: false
    };
  this.handleClick = this.handleClick.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
}

handleClick(e) {
  e.preventDefault();
  this.props.login({user: {email: "mwr", password: "password"}}).then(hashHistory.push("/"));
}

// Older version
// handleSubmit(e) {
//   e.preventDefault();
//   debugger
//   // this.setState({"loading": true});
//   this.props.signup({user: this.state});
//   // .then(
//   //   hashHistory.push("/"),
//   //   this.renderErrors()
//   // );
// }

handleSubmit(e) => this.props.signup({user: this.state})
            .then(() => hashHistory.push("/user"))

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
    debugger
    if (this.props.loggedIn) {
      return (<p>redirecting</p>);
    } else {
      return (
        <div>
        <LoginHeader />
        <div className="authContainer">
          <Loader loading={this.state.loading}>
          <form className="authForm">


              {this.renderErrors()}

                <div className="fieldparagraph">
                  <label>Email Address:</label>
                    <input type="text"
                      value={this.state.email}
                      placeholder="you@yours"
                      onChange={this.handleInput("email")} />
                </div>

                <div className="fieldparagraph">
                  <label> Password:</label>
                  <input type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")} />
                </div>
                <div className="fieldparagraph">
                  <label>Username:</label>
                    <input type="text" placeholder="name"
                      value={this.state.username}
                      onChange={this.handleInput("username")} />
                </div>


                  <div className="buttonContainer">
                    <button onClick={(e) => this.handleSubmit(e) }>
                      Sign up
                    </button>

                  <button onClick={ (e) => this.handleClick(e) }>
                      Guest Account
                    </button>
                  </div>
          </form>
          </Loader>
        </div>
        <Footer />
      </div>
      );
    }
  }
}

export default withRouter(SignUp);
