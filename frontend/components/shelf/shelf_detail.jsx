import React from 'react';
// import ShelfDetailItem from './shelf_detail_item';



class ShelfDetail extends React.Component {


    render() {
      return (
        <section className="ShelfDetail">
          <ul className="ShelfDetailHeader group">
            <li>cover</li>
            <li>title</li>
            <li>author</li>
            <li>avg rating</li>
            <li>rating</li>
            <li>shelves</li>
            <li>date read</li>
          </ul>

        </section>
      );
    }
}

export default ShelfDetail;
