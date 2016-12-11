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

  // handleSubmit() {
  //   // clear state then submit
  // }

  render() {
      return(

        <form className="CreateShelfForm"
          onSubmit={() => this.props.createShelf(this.state)}>

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
