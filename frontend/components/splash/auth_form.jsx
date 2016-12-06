import React from 'react';
import Footer from './splash_footer';


class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
      password: "",
      email: ""
    };
  }

  // signIn(e) {
  //   e.preventDefault();
  //   const user = this.state;
  //   debugger
  //   this.props.signIn({ user });
  // }

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

export default AuthForm;
