import React from 'react';
import AuthFormContainer from './splash/auth_form_container';

const App = ({ children }) => (
  <div>
    <main>
      <h1>Hello!</h1>
      <p>Please come back on December 16th.
        I will be in a much nicer state then.
        If you really can't wait, try again in three days.
       </p>
       <AuthFormContainer />
       { children }
     </main>
  </div>
);

export default App;
