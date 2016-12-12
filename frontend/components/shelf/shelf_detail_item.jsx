import React from 'react';
import { Link, withRouter } from 'react-router';


// <li className="avg-rating-col">detail_avg rating</li>
// <li className="rating-col">detail_rating</li>
// <li className="shelves-col">detail_shelves</li>


class ShelfDetailItem extends React.Component {


  render() {
    
    // const bookPath = `user/books/${this.props.bookDetail.bookId}`;
    return(
      <ul className="shelfDetailItem group">

        <li className="cover-col">
          <Link >
            <img src={ this.props.bookDetail.coverImageUrl } />
            </Link>
        </li>

        <li className="title-col">
          <Link>
            { this.props.bookDetail.title }
          </Link>
        </li>

        <li className="author-col">
          <Link >
            { this.props.bookDetail.authorName}
          </Link>
        </li>

      </ul>
    );
  }
}

export default withRouter(ShelfDetailItem);
