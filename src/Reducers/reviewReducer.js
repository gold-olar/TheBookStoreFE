import {
  CREATE_REVIEW_SUCCESS,
  FETCH_REVIEWS_SUCCESS,
} from "../Actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.reviews, action) {
  switch (action.type) {
    case CREATE_REVIEW_SUCCESS:
      console.log(action);
      return [...state, action.review];
    case FETCH_REVIEWS_SUCCESS:
      return action.reviews;
    default:
      return state;
  }
}
