
import { ADD_BOOK_SUCCESS, FETCH_SAVEDBOOKS_SUCCESS, DELETE_BOOK_SUCCESS } from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function addSavedBookSuccess(savedBook) {
  return {
    type: ADD_BOOK_SUCCESS,
    savedBook,
  };
}

export function fetchSavedBooksSuccess(savedBooks) {
  return {
    type: FETCH_SAVEDBOOKS_SUCCESS,
    savedBooks,
  };
}

export function deleteBookSuccess(bookId) {
  return {
    type: DELETE_BOOK_SUCCESS,
    bookId,
  };
}

export function createBook(bookData, token) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(`${process.env.REACT_APP_API_BASEURL}books/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Book Added.") {
          return dispatch(addSavedBookSuccess(data.data.savedBook));
        }
        throw new Error(data.message);
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw new Error(error);
      });
  };
}

/* 
Allows only authenticated users can fetch want to read and saved books
funtion to fetch books by userr
*/

export function fetchAllSavedBooks(token) {
  return function (dispatch) {
    if (token) {
      dispatch(beginApiCall());
      return fetch(`${process.env.REACT_APP_API_BASEURL}books/getBooks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Fetched All Books") {
            return dispatch(fetchSavedBooksSuccess(data.data.books));
          }
          throw new Error(data.message);
        })
        .catch((error) => {
          dispatch(apiCallError());
          throw new Error(error);
        });
    }
    return false;
  };
}

export function deleteBook(bookData, token) {
  return function (dispatch) {
    if (bookData && token) {
      dispatch(beginApiCall());
      return fetch(`${process.env.REACT_APP_API_BASEURL}books/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Book has been deleted") {
            return dispatch(deleteBookSuccess(bookData.bookId));
          }
          throw new Error(data.message);
        })
        .catch((error) => {
          dispatch(apiCallError());
          throw new Error(error);
        });
    }
    return false;
  };
}
