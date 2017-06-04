// Step 2. In index.js we will wire it in so that it will work
// importing Javascript objects that contain methods we need to use
// in order to use React. They are the react library.
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// we need to ensure that this code is generating usable state for our
// application by creating a booklist component within react
const rootReducer = combineReducers({
    // this gives us the same mapping of state
    // key is books and value is BooksReducer
    // passing this into the function combineReducers is essentially telling
    // reduce how to create our application state
    // the single piece of state is books
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
