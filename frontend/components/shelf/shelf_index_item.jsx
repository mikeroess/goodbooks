import React from 'react';

class ShelfIndexItem extends React.Component {

render () {

  return (
      <li>
      {this.props.shelf.title}
      </li>
  );
}

}

export default ShelfIndexItem;
