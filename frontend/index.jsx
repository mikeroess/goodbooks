import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCurrentUser  } from './actions/session_actions.js';
// SetupApp();

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // store.dispatch(receiveCurrentUser(window.gon));
  const root = document.getElementById('root');
  // window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});
