import React from 'react';
import { Link, withRouter } from 'react-router';

class ShelfIndexItem extends React.Component {

render () {
  const linkPath = `/user/shelf/${this.props.shelf.shelfId}`;

  return (
      <li>
      <Link to={ linkPath } className="shelfIndexLink">
        {this.props.shelf.title} {'('}{this.props.shelf.count}{')'}
      </Link>
      </li>
  );
}

}

export default withRouter(ShelfIndexItem);
