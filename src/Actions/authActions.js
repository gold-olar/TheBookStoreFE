import {
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT_SUCCESS,
  PERSIST_USER_AUTH,
  EDIT_PROFILE_SUCCESS,
} from "./actionTypes";

import { beginApiCall, apiCallError } from "./apiStatusActions";

export function userSignUpSuccess(authDetails) {
  return {
    type: USER_SIGNUP_SUCCESS,
    authDetails,
  };
}

export function userLoginSuccess(loginDetails) {
  return {
    type: USER_LOGIN_SUCCESS,
    loginDetails,
  };
}

export function userLogOutSuccess() {
  return {
    type: USER_LOG_OUT_SUCCESS,
  };
}

export function persistUserAuth(token){
  return {
    type: PERSIST_USER_AUTH,
    token,
  };
}

export function editProfileSuccess(token){
  return {
    type: EDIT_PROFILE_SUCCESS,
    token,
  }
}


export function userSignUp(userData) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(`${process.env.REACT_APP_API_BASEURL}users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // mode: 'cors',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "SignUp successful.") {
          return dispatch(userSignUpSuccess(data.userData));
        }
        throw new Error(data.message);
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw new Error(error.message);
      });
  };
}


export function userLogin(userData) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(`${process.env.REACT_APP_API_BASEURL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login Successful") {
          localStorage.setItem('token', data.token);
          return dispatch(userLoginSuccess(data.token));
        }
        throw new Error(data.message);
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw new Error(error.message);
      });
  };
}


export function persistUser () {
  return function (dispatch) {
    const token = localStorage.getItem("token")
    if(token){
      return dispatch(persistUserAuth(token));
    }
    return false;
  };
}




export function userLogOut() {
  return function (dispatch) {
    dispatch(beginApiCall());
    localStorage.clear();
    return dispatch(userLogOutSuccess());
  };
}



export function editUserProfile(userData, token) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(
      `${process.env.REACT_APP_API_BASEURL}users/edit_details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify(userData)
      }
    ) 
    .then(response => response.json())
    .then(data => {
      if(data.message === "Email update successful." || 'Password change was successful.'){
        return dispatch(editProfileSuccess(data.token));
      }
      throw new Error(data.message);
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw new Error(error);
    });
  };
}
