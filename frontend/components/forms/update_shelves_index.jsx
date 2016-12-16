import React from 'react';
import { withRouter, Link } from 'react-router';

class AddToShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayShelves: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayShelvesClick = this.displayShelvesClick.bind(this);
  }

  componentWillMount() {
    if (Array.isArray(this.props.userShelves) && Array.isArray(this.props.book.shelfIds)) {
      this.state.shelfIds = [];
      this.props.userShelves.map((shelf) => {
        this.state[shelf.shelfId] = {
          title: shelf.title,
          checked: this.props.book.shelfIds.includes(shelf.shelfId),
          bookId: this.props.book.bookId
        };
        this.state.shelfIds.push(shelf.shelfId);
      });
      this.setState({displayShelves: false});
    }
  }

  componentWillReceiveProps(nextProps) {
    let updated = (this.props.userShelves !== nextProps.userShelves || this.props.book.shelfIds !== nextProps.book.shelfIds);
    if (updated && Array.isArray(nextProps.userShelves) && Array.isArray(nextProps.book.shelfIds)) {
      this.state.shelfIds = [];
      nextProps.userShelves.map((shelf) => {
        this.state[shelf.shelfId] = {
          title: shelf.title,
          checked: nextProps.book.shelfIds.includes(shelf.shelfId),
          bookId: nextProps.book.bookId
        };
      this.state.shelfIds.push(shelf.shelfId);
      });
      this.setState({displayShelves: false});
    }
  }

  displayShelvesClick() {
    this.setState({displayShelves: !this.state.displayShelves});
  }

  handleChange(key) {
    const newValue = {};
    newValue[key] = this.state[key];
    newValue[key].checked = !newValue[key].checked;
    this.setState(newValue);
  }

  handleSubmit() {
    const shelvedBooks = {};
    const stateCopy = this.state;
    delete stateCopy["displayShelves"];
    delete stateCopy["shelfIds"];
    shelvedBooks["shelvedBooks"] = stateCopy;
    this.props.updateBookshelves(shelvedBooks);
    if (typeof(this.props.params.shelfId) === "undefined" ) {
      this.props.fetchBooks();
    } else {
      this.props.fetchBooks(this.props.params.shelfId);
    }
    this.setState({displayShelves: false});
  }

  render() {
    if (!Array.isArray(this.props.userShelves)) {
      return <div></div>;
    }
    const shelfIds = this.state.shelfIds;

    let shelves;
    if (typeof(shelfIds) !== "undefined") {
     shelves = shelfIds.map((shelfId) =>
    <div  key={`shelfIdCheckbox-${shelfId}${this.props.book.bookId}`} className="checkBoxDiv group">
      <input type="checkbox" id={`checkbox-label-shelf-id${shelfId}`}
        checked={ this.state[shelfId].checked }
        onChange={ () => this.handleChange(shelfId) }
      />
      <label htmlFor={`checkbox-label-shelf-id${shelfId}`}>
        { this.state[shelfId].title }
      </label>
    </div>
  );}

  let shelvesList;
  if (typeof(shelfIds) !== "undefined") {
     shelvesList = shelfIds.map((shelfId) => {
      if (this.state[shelfId].checked) {
        return <Link to={`user/shelf/${shelfId}`} key={shelfId} className="shelfListLink">{this.state[shelfId].title}</Link>;
      }
    });}

    return (
      <div>
      <button className="displayReview" onClick={this.displayShelvesClick}>{ this.state.displayShelves ? "Back" : "Edit Shelves"}</button>
      <form className="UpdateShelvesForm" onSubmit={() => this.handleSubmit()}>
        { this.state.displayShelves ? shelves : shelvesList }
        {this.state.displayShelves ? <button>Update Shelves</button> : <div></div>}
      </form>
    </div>
    );
  }

}



export default withRouter(AddToShelf);
