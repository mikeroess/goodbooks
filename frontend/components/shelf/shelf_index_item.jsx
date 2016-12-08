import React from 'react';
import { Link, withRouter } from 'react-router';

class ShelfIndexItem extends React.Component {

render () {
  return (
      <li>
      <Link className="shelfIndexLink">
        {this.props.shelf.title} {this.props.shelf.count}
      </Link>
      </li>
  );
}

}

export default ShelfIndexItem;
