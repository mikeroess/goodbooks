import React from 'react';
import { withRouter } from 'react-router';

class AddToShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let updated = (this.props.userShelves !== nextProps.userShelves || this.props.bookShelves !== nextProps.bookShelves);
    if (updated && Array.isArray(nextProps.userShelves)) {
      nextProps.userShelves.map((shelf) => {
        this.state[shelf.shelfId] = {
          title: shelf.title,
          checked: nextProps.bookShelves.includes(shelf.shelfId),
          bookId: nextProps.bookId
        };
      });

    }
  }

  handleChange(e, key) {
    const newValue = {};
    newValue[key] = this.state[key];
    newValue[key].checked = !newValue[key].checked;
    this.setState(newValue);
  }

  handleSubmit() {
    const shelvedBooks = {};
    shelvedBooks["shelvedBooks"] = this.state;
    this.props.updateBookshelves(shelvedBooks);
  }

  render() {

    if (!Array.isArray(this.props.userShelves)) {
      return <div></div>;
    }
    const keys = Object.keys(this.state);
    const input = keys.map((objectKey) =>
    <div key={objectKey} className="checkBoxDiv group" onClick={() => this.handleChange(event, objectKey)}>

        <input type="checkbox"
          checked={this.state[objectKey].checked}
        />
      <label>{this.state[objectKey].title}</label>
    </div>
      );
    return (
      <form className="UpdateShelvesForm" onSubmit={() => this.handleSubmit()}>
        { input }
        <button>Update Shelves</button>
      </form>
    );
  }

}



export default withRouter(AddToShelf);
