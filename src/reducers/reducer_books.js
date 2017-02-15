// Step 1. Developing Our Reducer.
// Step 2. In index.js we will wire it in so that it will work
// this is a reducer, just a function and a return with a piece of our application state, a list of books
// to be able to make use of this reducer function anywhere else in our application, we need to export it.
// with export default any other file in our application can import this one and it will just automatically
// receive the books reducer.
export default function() {
  return [ // return array of books which contains a list of objects
    {title: 'Coding with Javascript for Dummies'}, // these will be a couple of different books
    {title: 'Meaningful Work'}, // these are a list of objects
    {title: 'Head First Javascript'},
    {title: 'How To Do Everything With Javascript'}
  ];
}
