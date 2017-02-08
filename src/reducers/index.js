// Step 2. In index.js we will wire it in so that it will work
import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    // this gives us the same mapping of state
    books: BooksReducer
});

export default rootReducer;
