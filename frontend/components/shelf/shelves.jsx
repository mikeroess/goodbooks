import React from 'react';
import ShelfIndexItem from './shelf_index_item';

class Shelves extends React.Component {

  componentDidMount() {
    this.props.fetchShelves(51);
  }

  // const shelfContent = shelves.map((shelf) => {
  //   return <ShelfIndexItem key={shelf.id} shelf={shelf} />;
  // });
  render() {
    const shelves = this.props.shelves;

    return(
      <section className="shelves">
        <ul className="customShelvesList">
          <li>DummyShelfItem</li>
          <ShelfIndexItem />
        </ul>
      </section>
    );
  };
}

export default Shelves;
