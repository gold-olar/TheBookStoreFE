import {
  SEARCH_BOOKS_SUCCESS,
  CLEAR_CURRENT_SEARCH_BOOKS,
} from "../Actions/actionTypes";
import initialState from "./initialState";

export default function searchReducer(
  state = initialState.searchResults,
  action
) {
  switch (action.type) {
    case SEARCH_BOOKS_SUCCESS:
      return action.books;
    case CLEAR_CURRENT_SEARCH_BOOKS:
      return [];
    default:
      return state;
  }
}
