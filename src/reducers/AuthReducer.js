import { LOGIN_USER, REGISTER_USER, LOGOUT } from "./reducer-consts";

const initState = {
  token: ""
};

export const auth_reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { token: action.payload });
    case REGISTER_USER:
      return Object.assign({}, state, { token: action.payload });
    case LOGOUT:
      return Object.assign({}, state, { token: "" });
    default:
      return state;
  }
};

export default auth_reducer;
