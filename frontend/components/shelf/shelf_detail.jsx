import React from 'react';
import ShelfDetailItem from './shelf_detail_item';



class ShelfDetail extends React.Component {


    render() {
      return (
        <section className="shelfDetail">
          <ul className="shelfDetailHeader group">
            <li className="cover-col">cover</li>
            <li className="title-col">title</li>
            <li className="author-col">author</li>
            <li className="avg-rating-col">avg rating</li>
            <li className="rating-col">rating</li>
            <li className="shelves-col">shelves</li>
          </ul>
          <ShelfDetailItem />
        </section>
      );
    }
}

export default ShelfDetail;
