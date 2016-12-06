import React from 'react';
import AuthFormContainer from './splash/auth_form_container';

const App = ({ children }) => (
  <div>
    <main>
       <AuthFormContainer />
       { children }
       <h1>Hello!</h1>
     </main>
  </div>
);

export default App;
