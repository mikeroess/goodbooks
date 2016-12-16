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

  handleSubmit() {
    if (this.state.title !== "") {
      this.props.createShelf(this.state);
    }
    this.setState({title: ""});
  }
// this.props.createShelf(this.state)
  render() {
      return(

        <form className="CreateShelfForm"
          onSubmit={() =>  this.handleSubmit() } >

          <label><h4>Add a Shelf:</h4></label>
          <div className="group">
            <input type="text" placeholder="shelf name"
              value={this.state.title} onChange={this.handleInput()}>
            </input>

            <button className="miniCreateShelf">add</button>
          </div>
        </form>
      );
  }

}

export default CreateShelfComponent;
