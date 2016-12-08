import React from 'react';
import Footer from './splash_footer';
import { hashHistory, withRouter } from 'react-router';
import LoginHeader from '../header/login_header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: ""
    };
  this.handleClick = this.handleClick.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillMount() {
    // this.props.loading({loading: false});
  }

  handleInput(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
}

handleClick(e) {
  e.preventDefault();
  this.props.loading({"loading": true});
  this.props.login({user: {email: "mwr", password: "password"}}).then(hashHistory.push("/"));
}

handleSubmit(e) {
  e.preventDefault();
  this.props.loading({"loading": true});
  this.props.signup({user: this.state});
  // .then(
  //   hashHistory.push("/"),
  //   this.renderErrors()
  // );
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

renderSpinner() {
  if (!this.props.loadingState) {
    return <div className="progress"></div>;
  } else {
    return;
  }
}

  render(){
    if (this.props.loggedIn) {
      hashHistory.push("/user");
    } else if (!this.props.loadingState) {
      return <div className="progress"></div>;
    } else {
      return (
        <div>
        <LoginHeader />
        <div className="authContainer">
          <form className="authForm">




              {this.renderSpinner()}
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
        </div>
        <Footer />
      </div>
      );
    }
  }
}

export default withRouter(SignUp);
