import React from 'react';
import Footer from './splash_footer';
import { withRouter } from 'react-router';
import LoginHeader from '../header/login_header';

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
        <LoginHeader />
        <form className="authForm"
          onSubmit={() => this.props.signup({user: this.state})}>
          <h1>{ this.props.currentUser }</h1>
            <section className="authFormFields">
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

            <button>Sign up</button>
          </section>
        </form>
        <Footer />
      </div>
      );
    }
  }

export default withRouter(SignUp);
