import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {


  render() {
    if (!this.props.book) {
      return <div>"Please select a book"</div>;
    }
    // Step 4: The state property being changed is 
    // assigned a new value, which was returned from the reducer.
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
