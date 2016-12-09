import React from 'react';
import { withRouter } from 'react-router';
import LoggedInHeaderContainer from '../header/logged_in_header_container';
import ShelvesContainer from '../shelf/shelves_container';




class UserHome extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
    <div className="userHome">
      <LoggedInHeaderContainer />
      <main className="userMain group">

          <aside className="userHomeAside">
              <ShelvesContainer />
          </aside>

          <content className="userHomeContent">
            { this.props.children }
            // <h1>I will become the main content</h1>
          </content>

        </main>
    </div>
    );
  }
}

export default withRouter(UserHome);
