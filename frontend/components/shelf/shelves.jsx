import React from 'react';
import ShelfIndexItem from './shelf_index_item';
import CreateShelf from './create_shelf';

class Shelves extends React.Component {

  componentWillMount() {
    this.props.fetchShelves(51);
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
          <CreateShelf />

        </section>
      );
    } else {
      return(
        <section className="shelves">
          <h3>BOOKSHELVES</h3>
          <p>You have no shelves!  Make one!</p>
          <CreateShelf userId={this.props.currentUserId}
             createShelf={this.props.CreateShelf}/>
        </section>
      );
    }
  }
}

export default Shelves;
