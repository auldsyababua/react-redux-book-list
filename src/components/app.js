import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'
// Finally, app renders the booklist
export default class App extends Component {
  render() {
    // Step 5: All affected containers a re-rendered with the new props.
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
