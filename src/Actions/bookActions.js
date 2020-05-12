//import actions from the actionType.js
import { FETCH_BOOKS_SUCCESS, CLEAR_CURRENT_BOOKS } from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function fetchBooksSuccess(books) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books,
  };
}

export function clearCurrentBooks() {
  return {
    type: CLEAR_CURRENT_BOOKS,
  };
}


export function fetchBooks(category, number) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(clearCurrentBooks());
    return fetch(
      `${process.env.REACT_APP_API_BASEURL}googleBooks/${category}/${number}`,
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
          return dispatch(fetchBooksSuccess(data.data));
        }
        throw new Error("Could not fetch books.");
      })
      .catch((error) => {
        dispatch(apiCallError());

        return new Error(error);
      });
  };
}
