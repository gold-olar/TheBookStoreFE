//import actions from the actionType.js
import { SUBSCRIBE_ISSUCCESS } from "./actionTypes";
import { apiCallError} from './apiStatusActions'; 



export function suscribeUserSuccess() {
  return {
    type: SUBSCRIBE_ISSUCCESS,
  };
}


export function subscribeUser(email) {
  return function (dispatch) {
    return fetch(`${process.env.REACT_APP_API_BASEURL}subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }
    ) 
    .then(response => response.json())
    .then(data => {
      if(data.message === 'Thank you for subscribing.'){
        return dispatch(suscribeUserSuccess());
      }
      throw new Error("Please try subscribing again.");
    })
    .catch((error) => {
      dispatch(apiCallError());
      console.log(error)
      throw new Error(error);
    });
  };
}
