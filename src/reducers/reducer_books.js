// Reducers generate our app state - in this case the book state
// we added this reducer to our combineReducers call in index.js
export default function() {
  return [
    { title: 'Javascript: The Good Parts', pages: 180 },
    { title: 'Harry Potter', pages: 32 },
    { title: 'The Dark Tower', pages: 198 },
    { title: 'Eloquent Ruby', pages: 1 },
  ];
}
