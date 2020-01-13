import { combineReducers } from "redux";
import swtich_reducer from "./QuestionSwitching";
import auth_reducer from "./AuthReducer";
import subject_reducer from "./QuizMaker";
import error_reducer from "./ErrorReducer";

const reducer = combineReducers({
  switching: swtich_reducer,
  auth: auth_reducer,
  maker: subject_reducer,
  error: error_reducer
});

export default reducer;
