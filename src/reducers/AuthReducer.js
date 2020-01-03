import { LOGIN_USER, REGISTER_USER } from "./reducer-consts";

const initState = {
  token: ""
};

export const auth_reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { token: action.payload });
    case REGISTER_USER:
      return Object.assign({}, state, { token: action.payload });
    default:
      return state;
  }
};

export default auth_reducer;
