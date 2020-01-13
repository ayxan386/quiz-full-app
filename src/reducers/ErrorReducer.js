import { ERROR } from "./reducer-consts";

const initState = {
  err: ""
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case ERROR:
      return Object.assign({}, state, { err: action.payload });
    default:
      return state;
  }
};

export default errorReducer;
