import {
  NEXT_QUESTION,
  PREV_QUESTION,
  LOAD_QUESTIONS,
  RECEIVED_RESULTS,
  SHOW_LOADER,
  ADD_ANSWER,
  LOGIN_USER,
  ADD_QUESTION,
  ERROR
} from "./reducer-consts";
import Axios from "axios";
export const next_question = () => {
  return {
    type: NEXT_QUESTION
  };
};
const source = "aykhan-quiz-app-backend.herokuapp.com";
const AUTH = "Authorization";
// const source = "localhost:5001";

export const prev_question = () => {
  return {
    type: PREV_QUESTION
  };
};

export const load_questions = group => {
  return (dispatch, getState) => {
    dispatch(show_loader());
    return Axios.get(`https://${source}/api/question/${group}`, {
      headers: {
        Authorization: getState().auth.token
      }
    })
      .then(data => {
        dispatch({
          type: LOAD_QUESTIONS,
          payload: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const show_loader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const results_received = data => {
  return {
    type: RECEIVED_RESULTS,
    payload: data
  };
};

export const addAnswer = (q_id, ans_id) => {
  return {
    type: ADD_ANSWER,
    payload: {
      question_id: q_id,
      answer_number: ans_id
    }
  };
};

export const submitAnswer = () => {
  return (dispatch, getState) => {
    const { user_ans } = getState().switching;
    let answ = Object.keys(user_ans).map(question_id => {
      return {
        question_id,
        answer_number: user_ans[question_id]
      };
    });
    dispatch(show_loader());
    Axios.post(
      `https://${source}/api/check`,
      {
        anws: answ,
        ans_weight: 1
      },
      {
        headers: {
          Authorization: getState().auth.token
        }
      }
    ).then(res => {
      dispatch(results_received(res.data));
    });
  };
};

export const register_user = (username, email, password, isMaker) => {
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
};

export const login_user = (username, password) => {
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
};

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    payload: question
  };
};
