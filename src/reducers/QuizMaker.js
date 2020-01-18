import { ADD_QUESTION, CLEAR_QUESTION, ERASE } from "./reducer-consts";

const initState = {
  subject: "",
  questions: [],
  question: {}
};

const subject_reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return Object.assign({}, state, {
        questions: [...state.questions, action.payload]
      });
    case CLEAR_QUESTION:
      return Object.assign({}, state, { questions: [] });
    case ERASE:
      return Object.assign({}, state, initState);
    default:
      return state;
  }
};

export default subject_reducer;
