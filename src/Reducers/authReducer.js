import {
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT_SUCCESS,
  PERSIST_USER_AUTH,
  EDIT_PROFILE_SUCCESS
} from "../Actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return action.authDetails;
    case USER_LOGIN_SUCCESS:
      return { ...state, token: action.loginDetails };
    case USER_LOG_OUT_SUCCESS:
      return {};
    case PERSIST_USER_AUTH:
      return {...state, token: action.token}
      case EDIT_PROFILE_SUCCESS:
        return {...state, token: action.token}
    default:
      return state;
  }
}
