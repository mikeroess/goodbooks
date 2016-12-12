import React from 'react';
import ShelfDetailItem from './shelf_detail_item';
import { withRouter } from 'react-router';



class ShelfDetail extends React.Component {

  componentDidMount() {
    this.props.fetchShelf(this.props.params.shelfId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.shelfId !== nextProps.params.shelfId) {
      nextProps.fetchShelf(nextProps.params.shelfId);
    }
  }

  // <li className="avg-rating-col">avg rating</li>
  // <li className="rating-col">rating</li>
  // <li className="shelves-col">shelves</li>

    render() {
      
      const shelfDetail = this.props.shelfDetail;
      let shelfBooksDetails = <div></div>;
      if (shelfDetail.length > 0) {
        shelfBooksDetails = shelfDetail.map((book) => {
          return <ShelfDetailItem key={book.bookId} bookDetail={book} />;
        });
      }
      return (
        <section className="shelfDetail">
          <ul className="shelfDetailHeader group">
            <li className="cover-col-header">cover</li>
            <li className="title-col">title</li>
            <li className="author-col">author</li>
          </ul>
          { shelfBooksDetails }
        </section>
      );
    }
}

export default withRouter(ShelfDetail);
