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
      return(

        <form className="CreateShelfForm"
          onSubmit={() => this.props.createShelf(this.state)}>

          <label><h3>Add a Shelf:</h3></label>
          <input type="text" placeholder="shelf name"
            value={this.state.title} onChange={this.handleInput()}>
          </input>

          <button className="miniCreateShelf">add</button>
        </form>
      );
  }

}

export default CreateShelfComponent;
