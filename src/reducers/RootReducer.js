import "./DatabaseComm";
import "./QuestionSwitching";
import { combineReducers } from "redux";
import data_access_reducer from "./DatabaseComm";
import swtich_reducer from "./QuestionSwitching";
import auth_reducer from "./AuthReducer";
import subject_reducer from "./QuizMaker";
import error_reducer from "./ErrorReducer";

const reducer = combineReducers({
  database: data_access_reducer,
  switching: swtich_reducer,
  auth: auth_reducer,
  maker: subject_reducer,
  error: error_reducer
});

export default reducer;
