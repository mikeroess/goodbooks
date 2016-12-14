import React from 'react';



class ReadStatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      id: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitReadStatus = this.submitReadStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.readStatuses !== nextProps.readStatuses &&
       typeof(nextProps.bookId) !== "undefined") {
      const newState = {
        status: nextProps.readStatuses[nextProps.bookId].status,
        id: nextProps.readStatuses[nextProps.bookId].readStatusId
      };
      this.setState(newState);
    }
  }

  handleChange() {
    return (e) => {
      return this.setState({ status: e.target.value });
    };
  }

  submitReadStatus() {
    return (e) => {
      e.preventDefault();
      const submission = {read_status: {status: this.state.status}};
      this.props.updateReadStatus(submission, this.state.id);
    };
  }

  render() {
    let readStatusText;
    if (typeof(this.props.readStatuses[this.props.bookId]) !== 'undefined') {
      readStatusText = this.props.readStatuses[this.props.bookId].status;
    }
    return(
      <form className="readStatusForm" onSubmit={this.submitReadStatus()}>
        <select value={this.state.status} onChange={this.handleChange()}>
          <option value="to-read">To Read</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>
        <button>Update Status</button>

      </form>
    );
  }
}


export default ReadStatusForm;
