export function selectBook(book) {
  console.log('A book has been selected:', book.title)
  // Step 2: An action creator (a function - in this case named selectBook)
  // returns an action (an object with a 'type' property - in this case with type 'BOOK_SELECTED')
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
