import React from 'react';
import AuthFormContainer from './splash/auth_form_container';
import Footer from './splash/splash_footer';

const App = ({ children }) => (
  <div>
    <main>
       { children }
       < AuthFormContainer />
     <Footer />
     </main>
  </div>
);

export default App;
