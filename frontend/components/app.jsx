import React from 'react';
import AuthFormContainer from './splash/auth_form_container';

const App = ({ children }) => (
  <div>
    <main>
       { children }
       < AuthFormContainer />
     </main>
  </div>
);

export default App;
