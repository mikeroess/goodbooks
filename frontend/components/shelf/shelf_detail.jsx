import React from 'react';
import ShelfDetailItem from './shelf_detail_item';
import { withRouter } from 'react-router';



class ShelfDetail extends React.Component {

  componentWillMount() {
    this.props.fetchShelf(this.props.params.shelfId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.shelfId !== nextProps.params.shelfId) {
      nextProps.fetchShelf(nextProps.params.shelfId);
    }
  }


    render() {
      const shelfDetail = this.props.shelfDetail;
      if (typeof(this.props.books) === 'undefined') {
        return <div></div>;
      }
      let shelfBooksDetails;
      if (this.props.books.length > 0) {
        shelfBooksDetails = this.props.books.map((book) => {
          let newKey=`shelfDetailItem${book.bookId}`;
          return <ShelfDetailItem key={newKey} book={book} shelves={this.props.shelves}/>;
        });
      }
      return (
        <section className="shelfDetail">
          <h3>{this.props.shelfDetail.title}</h3>
          <ul className="shelfDetailHeader group">
            <li className="cover-col-header">cover</li>
            <li className="title-col">title</li>
            <li className="author-col">author</li>
              <li className="shelves-col">shelves</li>
              <li className="read-status-col">status</li>
          </ul>
          { shelfBooksDetails }
        </section>
      );
    }
}

export default withRouter(ShelfDetail);
