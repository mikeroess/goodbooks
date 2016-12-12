import React from 'react';
import { Link, withRouter } from 'react-router';

class ShelfIndexItem extends React.Component {

 componentWillReceiveProps(nextProps) {
   if (this.props.shelf.count !== nextProps.shelf.count) {
     nextProps.fetchShelf(this.props.shelf.shelfId);
   }
 }
render() {
  // debugger
  const linkPath = `/user/shelf/${this.props.shelf.shelfId}`;
  return (
      <div className="ShelfIndexItem group">
        <li className="ShelfIndexLink">
          <Link to={ linkPath } className="shelfIndexLink">
            {this.props.shelf.title} {'('}{this.props.shelf.count}{')'}
          </Link>
        </li>
        <button className="deleteShelf" onClick={() => this.props.destroyShelf(this.props.shelf.shelfId)}>delete</button>
      </div>
  );
}

}

export default withRouter(ShelfIndexItem);
