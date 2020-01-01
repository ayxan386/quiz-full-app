import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";

export class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/takeTest**'>
          <App></App>
        </Route>
        <Route path='/register**'>
          <Register></Register>
        </Route>
      </Switch>
    );
  }
}

export default MyRouter;
