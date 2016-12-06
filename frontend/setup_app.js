import { receiveCurrentUser } from './actions/session_actions';


const setUpApp = function() {
  // debugger
  const currentUser = window.gon["username"];
  receiveCurrentUser(currentUser);
};

export default setUpApp;
