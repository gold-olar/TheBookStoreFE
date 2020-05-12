//import actions from the actionType.js
import { CREATE_REVIEW_SUCCESS , FETCH_REVIEWS_SUCCESS} from "./actionTypes";
import {beginApiCall, apiCallError} from './apiStatusActions'; 

export function addReviewSuccess(review) {
  return {
    type: CREATE_REVIEW_SUCCESS,
    review,
  };
}

export function fetchReviewsSuccess(reviews) {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    reviews
  }
}


export function createReview(reviewData, token) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(
      `${process.env.REACT_APP_API_BASEURL}review/add_review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify(reviewData)
      }
    ) 
    .then(response => response.json())
    .then(data => {
      if(data.message === "Review Added."){
        return dispatch(addReviewSuccess(data.data.review));
      }
      throw new Error(data.message);
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw new Error(error);
    });
  };
}


export function fetchAllReviews() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(
      `${process.env.REACT_APP_API_BASEURL}review/reviews`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ) 
    .then(response => response.json())
    .then(data => {
      if(data.message === "Fetched all reviews successfully."){
        return dispatch(fetchReviewsSuccess(data.reviews));
      }
      throw new Error(data.message);
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw new Error(error);
    });
  };
}
