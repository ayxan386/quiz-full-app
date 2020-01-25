import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import App from "./test taking/App";
import Register from "./auth/Register";
import Login from "./auth/Login";
import MainPage from "./MainPage";
import TempAccount from "./auth/TempAccount";
import StartPage from "./test taking/StartPage";
import ResultsPage from "./results/ResultsPage";
import MakeQuestion from "./GitHubTest";

export class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/tt**'>
          <App></App>
        </Route>
        <Route path='/register**'>
          <Register></Register>
        </Route>
        <Route path='/login'>
          <Route path='/'>
            <Login></Login>
          </Route>
        </Route>
        <Route path='/ss**'>
          <StartPage></StartPage>
        </Route>
        <Route path='/index**'>
          <MainPage></MainPage>
        </Route>
        <Route path='/temp/form**'>
          <TempAccount></TempAccount>
        </Route>
        <Route path='/results**'>
          <ResultsPage></ResultsPage>
        </Route>
        <Route path='/testpage'>
          <MakeQuestion></MakeQuestion>
        </Route>
      </Switch>
    );
  }
}

export default MyRouter;
