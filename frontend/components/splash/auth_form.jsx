import React from 'react';
import Footer from './splash_footer';
import { hashHistory, withRouter } from 'react-router';
import SignupHeader from '../header/signup_header';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: ""
    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentWillMount() {
    this.props.loading({loading: false});
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderSpinner() {
    if (!this.props.loadingState) {
      return <div className="progress"></div>;
    } else {
      return;
    }
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
    } else {
      return (
        <div>
          <SignupHeader />
          <div className="authContainer">
            <form className="authForm" onSubmit={() => this.props.login({user: this.state})}>
              { this.renderErrors() }
              { this.renderSpinner() }
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
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default withRouter(AuthForm);
