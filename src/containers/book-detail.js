import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}
// Take this argument of app state
// and return an object to be passed as props
// inside of BookDetail
function mapStateToProps(state) {
  return {
    // prop of book
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
