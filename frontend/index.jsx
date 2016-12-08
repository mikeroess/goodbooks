import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCurrentUser  } from './actions/session_actions.js';
import setUpApp from './setup_app';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // store.dispatch(setUpApp());
  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});
