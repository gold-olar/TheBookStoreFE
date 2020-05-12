import {combineReducers } from "redux";
import books from "./booksReducer";
import auth from './authReducer';
import apiCallsInProgress from './apiStatusReducer';
import reviews from './reviewReducer';
import subscribed from './subscribeReducer';
import savedBooks from './savedBooksReducer';
import searchResults from './searchReducer';

const rootReducer = combineReducers({
    books,
    auth,
    apiCallsInProgress,
    reviews,
    subscribed,
    savedBooks,
    searchResults,
})


export default rootReducer;