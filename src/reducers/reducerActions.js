import {
  NEXT_QUESTION,
  PREV_QUESTION,
  LOAD_QUESTIONS,
  RECEIVED_RESULTS,
  SHOW_LOADER,
  ADD_ANSWER,
  ADD_QUESTION,
  LOGOUT,
  ERASE
} from "./reducer-consts";
import Axios from "axios";
import { login, register } from "./reducerMethods/AuthMethods";
import { postAnswers } from "./reducerMethods/QuestionMethods";

export const next_question = () => {
  return {
    type: NEXT_QUESTION
  };
};

export const source = "aykhan-quiz-app-backend.herokuapp.com";
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
  return postAnswers();
};

export const register_user = (username, email, password, isMaker) => {
  return register(username, email, password, isMaker);
};

export const login_user = (username, password) => {
  return login(username, password);
};

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    payload: question
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const erase = () => {
  return {
    type: ERASE
  };
};
