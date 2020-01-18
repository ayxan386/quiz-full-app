import { LOGIN_USER, ERROR } from "../reducer-consts";
import Axios from "axios";

import { source } from "../reducerActions";

export function login(username, password) {
  return dispatch => {
    Axios.post(`https://${source}/login`, {
      name: username,
      pass: password
    }).then(data => {
      if (data.data.message.includes("logged in")) {
        dispatch({
          type: LOGIN_USER,
          payload: data.data.token
        });
      } else {
        dispatch({
          type: ERROR,
          payload: "Wrong username/password"
        });
      }
    });
  };
}

export function register_temp(username, email) {
  return dispatch => {
    Axios.post(`https://${source}/temp`, {
      name: username,
      email: email
    }).then(data => {
      if (data.data.message.includes("success")) {
        dispatch({
          type: LOGIN_USER,
          payload: data.data.token
        });
      } else {
        dispatch({
          type: ERROR,
          payload: "User already taken"
        });
      }
    });
  };
}

export function register(username, email, password, isMaker) {
  return dispatch => {
    Axios.post(`https://${source}/register`, {
      name: username,
      pass: password,
      email: email,
      isMaker: isMaker
    }).then(data => {
      //TODO change the replace method
      if (data.data.message.includes("OK")) window.location.replace("/login");
    });
  };
}
