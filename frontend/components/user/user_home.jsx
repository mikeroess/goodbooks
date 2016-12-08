import React from 'react';
import { withRouter } from 'react-router';
import LoggedInHeaderContainer from '../header/logged_in_header_container';
import Shelves from '../shelf/shelves';

class UserHome extends React.Component {

  // componentWillMount() {
  //   this.props.loading({"loading": false});
  // }

  render() {
    return (
    // <div className="userHome">
    <div>hi</div>
      // <LoggedInHeaderContainer />
    //   <main className="userMain group">
    //     <aside className="userHomeAside">
    //       <Shelves />
    //     </aside>
    //     <content className="userHomeContent">
    //       <h1>HEY!</h1>
    //     </content>
    //   </main>
    // </div>
    );
  }
}

export default withRouter(UserHome);
