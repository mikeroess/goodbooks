import React from 'react';
import Footer from './splash_footer';
import { hashHistory, withRouter } from 'react-router';
import SignupHeader from '../header/signup_header';
// import Loader from 'react-loader';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: "",
      // loaded: false
    };
    this.handleClick = this.handleClick.bind(this);

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
  // this.setState({loaded: false});
  this.props.login({user: {email: "mwr", password: "password"}}).then(hashHistory.push("/"));
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
    if (this.props.loggedIn) {
      hashHistory.push("/user");
    } else if (this.state.loaded) {
      <Loader loaded={this.state.loaded}></Loader>
    } else {
      return (
        <div>
          <SignupHeader />
          <div className="authContainer">

            <Loader loaded={this.state.loaded}>
            <form className="authForm" onSubmit={() => this.props.login({user: this.state})}>
              { this.renderErrors() }
              <div className="fieldparagraph">
                <label>Email Address:</label>
                  <input type="text"
                    value={this.state.email}
                    placeholder="you@yours"
                    onChange={this.handleInput("email")} />
              </div>

              <div className="fieldparagraph">
                <label> Password: </label>
                  <input type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")} />
              </div>


              <div className="buttonContainer">
                <button>Log in</button>
                <button onClick={ this.handleClick }>
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

export default withRouter(AuthForm);
