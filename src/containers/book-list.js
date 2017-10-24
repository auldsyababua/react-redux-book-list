import React, { Component } from 'react';
//import connect function from React-Redux library (used to connect Redux to React)
//to turn this component into a container, since book list needs to know when state updates
import { connect } from 'react-redux';
// import the action creator for selecting a book
import  { selectBook } from '../actions/index';
// Makes sure that all the action creator gets sent to all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((books) => {
      return (
        <li
          key={books.title}
          //Step one: An event occurs (such as a click or an AJAX request finishes).
          //This event calls an action creator (selectBook in this case)
          onClick={() => this.props.selectBook(books)}
          className ="list-group-item">
          {books.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This function that returns an object that is availabe to the component above as 'this.props'
// Whenever state changes, the container will re-render with the new state (BookList below in connect)
// this function is the glue between react and redux
function mapStateToProps (state) {
  // whaever is returned will show up
  // as props inside BookList
  return {
    books: state.books
  }
}

//Anything returned to this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// connect takes a function (mapStateToProps) and a component (BookList)
// and returns a container, which is a component that is aware of the state within redux
// mapDispatchToProps makes the container aware of the new dispatch method, selectBook,
// and makes it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
