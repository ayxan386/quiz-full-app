import React from "react";
import ReactDOM from "react-dom";
import { MyRouter } from "./components/Router.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
