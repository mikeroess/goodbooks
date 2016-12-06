import { gonLogin } from './actions/session_actions';


const setUpApp = function() {
  const currentUser = window.gon["username"];
  return gonLogin(currentUser);
};

export default setUpApp;
