import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
// import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // const root =
});
