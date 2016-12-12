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
      loading: false,
      imageFile: null,
      imageUrl: null
    };
  this.guestLogin = this.guestLogin.bind(this);
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

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file,
      imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append("user[username]", this.state.username);
  formData.append("user[password]", this.state.password);
  formData.append("user[email]", this.state.email);
  formData.append("user[image]", this.state.imageFile);
  this.props.signup(formData)
  .then(() => hashHistory.push("/user"),
  (error) => console.log(error));
}


// password: "",
// email: "",
// loading: false,
// imageFile: null,
// imageUrl: null

guestLogin(e) {
  e.preventDefault();
  this.props.login({user: {email: "mwr", password: "password"}})
  .then(() => hashHistory.push("/user"));
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
      return (<p>redirecting</p>);
    } else {
      return (
        <div>
        <LoginHeader />
        <div className="authContainer">



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
                      value={ this.state.username }
                      onChange={ this.handleInput("username") } />
                </div>

                <div className="fieldparagraph">
                  <label>User Icon:</label>
                  <input type="file" onChange={ (e) => this.updateFile(e) } />
                </div>


                <div className="fieldparagraph">
                  <img className="iconPreview" src={ this.state.imageUrl } />
                </div>

                  <div className="buttonContainer">
                    <button onClick={(e) => this.handleSubmit(e) }>
                      Sign up
                    </button>

                  <button onClick={(e) => this.guestLogin(e) }>
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
