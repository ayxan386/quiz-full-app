import {
  NEXT_QUESTION,
  PREV_QUESTION,
  ADD_ANSWER,
  RECEIVED_RESULTS
} from "./reducer-consts";
import { LOAD_QUESTIONS, SHOW_LOADER } from "./reducer-consts";

const init_state = {
  currentIndex: 0,
  user_ans: {},
  isLoaded: false,
  questions: []
};

const swtich_reducer = (state = init_state, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      if (state.currentIndex + 1 < state.questions.length)
        return Object.assign({}, state, state.currentIndex + 1);
      return state;

    case PREV_QUESTION:
      if (state.currentIndex - 1 > 0)
        return Object.assign({}, state, state.currentIndex - 1);
      return state;

    case ADD_ANSWER:
      let temp_ans = { ...state.user_ans };
      temp_ans[action.payload.question_id] = action.payload.answer_number;
      let f = Object.assign({}, state, { user_ans: temp_ans });
      return f;

    case RECEIVED_RESULTS:
      return Object.assign({}, state, {
        result: action.payload,
        isLoaded: true
      });
    case LOAD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload,
        isLoaded: true
      });
    case SHOW_LOADER:
      return Object.assign({}, state, { isLoaded: false });

    default:
      return state;
  }
};

export default swtich_reducer;
