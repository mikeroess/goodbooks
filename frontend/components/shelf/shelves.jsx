import React from 'react';
import ShelfIndexItem from './shelf_index_item';

class Shelves extends React.Component {

  componentWillMount() {
    this.props.fetchShelves(51);
  }


  render() {
    const shelves = this.props.shelves;
    if (Array.isArray(shelves)) {

      const shelfContent = shelves.map((shelf) => {
        return <ShelfIndexItem key={shelf.id} shelf={shelf} />;
      });

      return(
        <section className="shelves">
          <ul className="customShelvesList">
            <li>DummyShelfItem</li>
            { shelfContent }
          </ul>
        </section>
      );
    } else {
      return(
        <section className="shelves">
          <ul className="customShelvesList">
            <li>No Shelves</li>

          </ul>
        </section>
      );
    }
  }
}

export default Shelves;
