import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import App from "./test taking/App";
import Register from "./auth/Register";
import Login from "./auth/Login";
import QuizMaker from "./maker/QuizMaker";
import MainPage from "./MainPage";

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
        <Route path='/ss**'>
          <QuizMaker></QuizMaker>
        </Route>
        <Route path='/index**'>
          <MainPage></MainPage>
        </Route>
      </Switch>
    );
  }
}

export default MyRouter;
