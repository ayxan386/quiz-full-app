import React from "react";
import ReactDOM from "react-dom";
import { MyRouter } from "./components/Router.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storer from "./store/store.js";
import "./css/main.css";
import "./css/spinner-loader.css";
import "./css/main-page.css";
import "./css/form.css";
import "./css/results.css";
import "./css/colours/loginIcons.css";
import "./css/bootstrap.min.css";
import "./css/LinkCopy/linkcopier.css";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = storer();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <MyRouter />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
