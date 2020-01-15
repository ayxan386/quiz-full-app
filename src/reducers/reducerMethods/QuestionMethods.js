import { show_loader, results_received } from "../reducerActions";
import Axios from "axios";

import { source } from "../reducerActions";

export function postAnswers() {
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
}

export function postQuestion() {
  return (dispatch, getState) => {
    const { questions } = getState().maker;
    questions.forEach(question => {
      Axios.post("https://${source}/api/question", {
        question
      });
    });
  };
}
