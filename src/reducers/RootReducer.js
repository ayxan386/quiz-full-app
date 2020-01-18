import { combineReducers } from "redux";
import swtich_reducer from "./QuestionSwitching";
import auth_reducer from "./AuthReducer";
import maker_reducer from "./QuizMaker";
import error_reducer from "./ErrorReducer";
import subject_reducer from "./SubjectReducer";

const reducer = combineReducers({
  switching: swtich_reducer,
  auth: auth_reducer,
  maker: maker_reducer,
  error: error_reducer,
  subjects: subject_reducer
});

export default reducer;
