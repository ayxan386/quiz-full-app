import React from "react";
import ReactDOM from "react-dom";
import { MyRouter } from "./components/Router.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
