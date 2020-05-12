import {
  FETCH_BOOKS_SUCCESS,
  CLEAR_CURRENT_BOOKS,
} from "../Actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.books, action) {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.books;
    case CLEAR_CURRENT_BOOKS:
      return [];
    default:
      return state;
  }
}
