import React from 'react';
import ShelfIndexItem from './shelf_index_item';
import CreateShelfContainer from './create_shelf_container';
import { Link, withRouter } from 'react-router';

class Shelves extends React.Component {

  componentDidMount() {
    this.props.fetchShelves(this.props.currentUser.userId);
  }

  render() {
    const shelves = this.props.shelves;
    if (Array.isArray(shelves)) {

      const shelfContent = shelves.map((shelf) => {
        return <ShelfIndexItem key={shelf.shelfId} shelf={shelf}
          fetchShelf={(shelfId) => this.props.fetchShelf(shelfId)}
          destroyShelf={(shelfId) => this.props.destroyShelf(shelfId)}/>;
      });

      return(

        <section className="shelves">

          <h3>Bookshelves</h3>
          <ul className="customShelvesList">
            { shelfContent }
          </ul>
          <CreateShelfContainer />

        </section>
      );
    } else {
      return(
        <section className="shelves">
          <h3>BOOKSHELVES</h3>
          <p>You have no shelves!  Make one!</p>
          <CreateShelfContainer />
        </section>
      );
    }
  }
}

export default withRouter(Shelves);
