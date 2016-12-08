import React from 'react';
import ShelfIndexItem from './shelf_index_item';

class Shelves extends React.Component {

  componentDidMount() {

    // this.props.fetchShelves(this.props.fetchShelves(this.props.shelfOwner.id));
  }


  render() {
    debugger
    const shelves = this.props.shelves;
    // const shelfContent = shelves.map((shelf) => {
    //   return <ShelfIndexItem key={shelf.id} shelf={shelf} />;
    // });

    return(
      <section className="shelves">
        <ul className="customShelvesList">
          <li>DummyShelfItem</li>
          <ShelfIndexItem />
        </ul>
      </section>
    );
  }
}

export default Shelves;
