//import actions from the actionType.js
import {
  SEARCH_BOOKS_SUCCESS,
  CLEAR_CURRENT_SEARCH_BOOKS,
} from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";


export function searchBooksSuccess(books) {
  return {
    type: SEARCH_BOOKS_SUCCESS,
    books,
  };
}

export function clearCurrentBooks() {
  return {
    type: CLEAR_CURRENT_SEARCH_BOOKS,
  };
}



export function fetchBooks(searchText) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(clearCurrentBooks());
    return fetch(
      `${process.env.REACT_APP_API_BASEURL}googleBooks/${searchText}/4`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Fetched books successfully") {
          // console.log(data.items)
          return dispatch(searchBooksSuccess(data.data));
        }
        throw new Error(`No results for ${searchText}`);
      })
      .catch((error) => {
        dispatch(apiCallError());

        return new Error(error);
      });
  };
}


export function clearResults() {
  return function (dispatch) {
    dispatch(clearCurrentBooks());
  };
}
