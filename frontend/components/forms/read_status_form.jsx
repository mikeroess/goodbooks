import React from 'react';



class ReadStatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitReadStatus = this.submitReadStatus.bind(this);
  }

  componentDidMount() {
    if (typeof(this.props.bookId) !== "undefined" && typeof(this.props.readStatuses[this.props.bookId]) !== "undefined") {
      this.setState({status: this.props.readStatuses[this.props.bookId].status});
    }
  }

  componentWillReceiveProps(nextProps) {

    if (typeof(nextProps.bookId) !== "undefined" && this.props.readStatuses[this.props.bookId] !== "undefined" &&
      this.props.readStatuses[nextProps.bookId] !== nextProps.readStatuses[nextProps.bookId]
       )
       {
      const newState = {
        status: nextProps.readStatuses[nextProps.bookId].status,
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
      const submission = { read_status: {status: this.state.status} };
      const submissionId = this.props.readStatuses[this.props.bookId].readStatusId ;
      this.props.updateReadStatus(submission, submissionId);
    };
  }

  render() {
    if (this.props.readStatuses[this.props.bookId] === "undefined") {
      return;
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
