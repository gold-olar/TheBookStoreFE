import { SUBSCRIBE_ISSUCCESS } from "../Actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.subscribed, action) {
  switch (action.type) {
    case SUBSCRIBE_ISSUCCESS:
      return true;
    default:
      return state;
  }
}
