import React from 'react';

class CreateShelf extends React.Component {
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
    const userId = this.props.userId;
      return(

        <form className="CreateShelfForm"
          onSubmit={() => this.props.CreateShelf(userId, this.state)}>

          <label><h3>Add a Shelf:</h3></label>
          <input type="text" placeholder="shelfName"
            value={this.state.title} onChange={this.handleInput()}>
          </input>
          <button>add</button>
        </form>
      );
  }

}

export default CreateShelf;
