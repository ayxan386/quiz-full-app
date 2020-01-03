import {
  NEXT_QUESTION,
  PREV_QUESTION,
  LOAD_QUESTIONS,
  RECEIVED_RESULTS,
  SHOW_LOADER,
  ADD_ANSWER
} from "./reducer-consts";
import Axios from "axios";
export const next_question = () => {
  return {
    type: NEXT_QUESTION
  };
};

export const prev_question = () => {
  return {
    type: PREV_QUESTION
  };
};

export const load_questions = group => {
  return dispatch => {
    dispatch(show_loader());
    return Axios.get(
      `https://aykhan-quiz-app-backend.herokuapp.com/api/question/${group}`
    ).then(data => {
      dispatch({
        type: LOAD_QUESTIONS,
        payload: data.data
      });
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
    console.log("this function got called");

    const { user_ans } = getState().switching;
    let answ = Object.keys(user_ans).map(question_id => {
      return {
        question_id,
        answer_number: user_ans[question_id]
      };
    });
    dispatch(show_loader());
    Axios.post("https://aykhan-quiz-app-backend.herokuapp.com/api/check", {
      anws: answ,
      ans_weight: 1
    }).then(res => {
      dispatch(results_received(res.data));
    });
  };
};
