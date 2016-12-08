import React from 'react';

class CreateShelfComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }


  handleInput() {
    return(e) => this.setState({
      title: e.currentTarget.value
    });
  }

  render() {
    const userId = this.props.currentUser.userId;
      return(

        <form className="CreateShelfForm"
          onSubmit={() => this.props.createShelf(userId, this.state)}>

          <label><h3>Add a Shelf:</h3></label>
          <input type="text" placeholder="shelfName"
            value={this.state.title} onChange={this.handleInput()}>
          </input>

          <button className="miniCreateShelf">add</button>
        </form>
      );
  }

}

export default CreateShelfComponent;
