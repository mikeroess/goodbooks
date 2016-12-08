import React from 'react';
import ShelfIndexItem from './shelf_index_item';
import CreateShelfContainer from './create_shelf_container';

class Shelves extends React.Component {

  componentWillMount() {
    this.props.fetchShelves(this.props.currentUser.userId);
  }


  render() {
    const shelves = this.props.shelves;
    if (Array.isArray(shelves)) {

      const shelfContent = shelves.map((shelf) => {
        return <ShelfIndexItem key={shelf.shelfId} shelf={shelf} />;
      });

      return(
        <section className="shelves">
          <h3>BOOKSHELVES</h3>
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

export default Shelves;
