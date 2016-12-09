import { gonLogin, logout } from './actions/session_actions';


const setUpApp = function() {
  const currentUser = window.gon;
  if (currentUser.hasOwnProperty("username")) {
    return gonLogin(currentUser);
  } else {
    return logout();
  }
};

export default setUpApp;
