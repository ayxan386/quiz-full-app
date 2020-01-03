import { createStore, applyMiddleware } from "redux";
import "../reducers/RootReducer";
import reducer from "../reducers/RootReducer";
// import { isLoading } from "../middlewares/LoadingWare";
import thunk from "redux-thunk";

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
