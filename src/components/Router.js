import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Login from "./Login";

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
        <Route path='/login**'>
          <Login></Login>
        </Route>
      </Switch>
    );
  }
}

export default MyRouter;