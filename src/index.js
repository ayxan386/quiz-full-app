import React from "react";
import ReactDOM from "react-dom";
import { MyRouter } from "./components/Router.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./css/main.css";
import "./css/main-page.css";
import "./css/form.css";
import "./css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
