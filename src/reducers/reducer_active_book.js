// State argument is not application state.
// Only the state this reducer is responsible for.
// Step 3: the action object is sent to all reducers. A switch statement filters out actions
// by using a switch statement that filters for type.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
