import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import AuthFormContainer from './splash/auth_form_container';
import SignUpContainer from './splash/sign_up_container';
import UserContainer from './user/user_container';
import ShelfDetailContainer from './shelf/shelf_detail_container';


const _ensureLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/login');
  }
};

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/user');
    }
  };

const Root = ({ store }) => {
  return (<Provider store={ store } >
    <Router history={ hashHistory }>
      <Route path="/" component={ App } onEnter={ _redirectIfLoggedIn }/>
      <Route path="/user" component={ UserContainer } onEnter={ _ensureLoggedIn }>
        <Route path="/user/shelf/:shelfId" component={ ShelfDetailContainer }/>
      </Route>
      <Route path="/login" component={AuthFormContainer}
         onEnter={_redirectIfLoggedIn} />
       <Route path="/signup" component={ SignUpContainer }
         onEnter={_redirectIfLoggedIn}  />
    </Router>
  </Provider>
);
};

export default Root;
