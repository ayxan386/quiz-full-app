import Axios from "axios";
import {
  LOAD_QUESTIONS,
  SHOW_LOADER,
  RECEIVED_RESULTS
} from "./reducer-consts";

const init_state = {
  currentIndex: 0,
  questions: [],
  isLoaded: false
};

const data_access_reducer = (state = init_state, action) => {
  switch (action.type) {
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

export default data_access_reducer;
