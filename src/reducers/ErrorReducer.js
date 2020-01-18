import { ERROR, ERASE } from "./reducer-consts";

const initState = {
  err: ""
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case ERROR:
      return Object.assign({}, state, { err: action.payload });
    case ERASE:
      return Object.assign({}, state, { err: "" });
    default:
      return state;
  }
};

export default errorReducer;
