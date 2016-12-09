import React from 'react';

class ShelfDetailItem extends React.Component() {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        <li>detail_cover</li>
        <li>detail_title</li>
        <li>detail_author</li>
        <li>detail_avg rating</li>
        <li>detail_rating</li>
        <li>detail_shelves</li>
        <li>detail_date read</li>
      </ul>
    );
  }
}

export default ShelfDetailItem;
