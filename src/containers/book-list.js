// purpose of this component is to render a list of books
// we are going to use the react-redux library by making use of one of our components
// as a container instead.
// A container is a react component that has a direct connection to the state
// managed by redux.
// React and Redux are two separate libraries, this file is the melding of both
// libraries, thereby making this component aware of the state contained in Redux.
import React, {Component} from 'react';
// pulling off a single property called connect
// this is the glue between React and Redux, only through this library do we
// merge them. React-Redux in turn makes this connect function available.
import {connect} from 'react-redux';

class BookList extends Component {
  // new function
  renderList() {

    debugger
    // plugin our application state as this.props.books
    return this.props.books.map((book) => { // mapping the array
        return (
          // for each book in the array, we create a list with title
          <li key={book.title} className="list-group-item">{book.title}</li> // because it is a list we have to add a key
        );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        // when calling a separate function inside of JSX, we write curly braces
        // this calls a new function of renderList
        // helper function, which is a function that helps another function
        {this.renderList()}
      </ul>
    )
  }
}
// This function is the glue between React and Redux.
// purpose of this function is to take our application state as an argument
// our state contains the array of books and the active book
// The argument is a state that returns an object.
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    // the object returned with a key of books and a value of state.books
    // because our books reducer is returning the books property, the array of
    // objects.
    books: state.books
  };
}

// the connect function says take this component, take this map.state to props
// and returns a container. The container is aware of the state in Redux.
// In a container file we do not want to export the BookList, we want to export
// the container
export default connect(mapStateToProps)(BookList);
