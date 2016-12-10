import React from 'react';
import { withRouter } from 'react-router';

class BookDetail extends React.Component{

  componentDidMount() {
    this.props.fetchBook(this.props.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.bookId !== nextProps.params.bookId) {
      nextProps.fetchBook(nextProps.params.bookId);
    }
  }

  render() {
    return(
      <h1>I will be a book detail one day</h1>
    );
  }
}

export default withRouter(BookDetail);
