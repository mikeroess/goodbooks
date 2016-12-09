import React from 'react';

class ShelfDetailItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="shelfDetailItem group">
        <li className="cover-col">detail_cover</li>
        <li className="title-col">detail_title</li>
        <li className="author-col">detail_author</li>
        <li className="avg-rating-col">detail_avg rating</li>
        <li className="rating-col">detail_rating</li>
        <li className="shelves-col">detail_shelves</li>

      </ul>
    );
  }
}

export default ShelfDetailItem;
