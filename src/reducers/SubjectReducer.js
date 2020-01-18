import { LOAD_SUBJECTS } from "./reducer-consts";

const initState = {
  subjects: []
};

export const subject_reducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_SUBJECTS:
      return {
        ...state,
        subjects: action.payload
      };
    default:
      return state;
  }
};

export default subject_reducer;
