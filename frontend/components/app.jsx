import React from 'react';

const App = ({ children }) => (
  <div>
    <main>
      <h1>Hello!</h1>
      <p>Please come back on December 16th.
        I will be in a much nicer state then.
        If you really can't wait, try again in three days.
       </p>
       { children }
     </main>
  </div>
);

export default App;
