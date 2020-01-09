import { ADD_QUESTION } from "./reducer-consts";

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
    default:
      return state;
  }
};

export default subject_reducer;
