import "./DatabaseComm";
import "./QuestionSwitching";
import { combineReducers } from "redux";
import data_access_reducer from "./DatabaseComm";
import swtich_reducer from "./QuestionSwitching";

const reducer = combineReducers({
  database: data_access_reducer,
  switching: swtich_reducer
});

export default reducer;
