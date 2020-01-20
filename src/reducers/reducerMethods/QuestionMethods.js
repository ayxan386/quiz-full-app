import { show_loader, results_received } from "../reducerActions";
import { CLEAR_QUESTION } from "../reducer-consts";
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

export const clear_question = () => {
  return {
    type: CLEAR_QUESTION
  };
};

export function postQuestions() {
  const randomSubject = () => {
    let res = "";
    for (let i = 0; i < 20; i++) {
      res += String.fromCharCode(
        Math.floor(Math.random() * 26 + "a".charCodeAt())
      );
    }
    return res;
  };

  return (dispatch, getState) => {
    const { questions } = getState().maker;
    const subject = randomSubject();
    Axios.post(
      `https://${source}/api/subject`,
      { subject },
      {
        headers: {
          Authorization: getState().auth.token
        }
      }
    ).then(data => {
      console.log("subject added " + subject);
      questions.forEach(question => {
        question.subject = subject;
        Axios.post(`https://${source}/api/question`, question, {
          headers: {
            Authorization: getState().auth.token
          }
        });
      });
      dispatch(clear_question());
    });
  };
}
