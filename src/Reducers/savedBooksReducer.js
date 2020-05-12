import {
  FETCH_SAVEDBOOKS_SUCCESS,
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from "../Actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.savedBooks, action) {
  switch (action.type) {
    case FETCH_SAVEDBOOKS_SUCCESS:
      return action.savedBooks;
    case DELETE_BOOK_SUCCESS:
      return state.filter(savedBook => savedBook._id !== action.bookId);
    case ADD_BOOK_SUCCESS:
      return [...state, action.savedBook];
    default:
      return state;
  }
}
