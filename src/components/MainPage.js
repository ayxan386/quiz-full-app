import React, { Component } from "react";
import QuizMaker from "./maker/QuizMaker";
import Subjects from "./subjects/Subjects";
import Logout from "./auth/Logout";
import checkAuth from "../middlewares/IsAuth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class MainPage extends Component {
  render() {
    return (
      checkAuth(this.props.token) || (
        <div className='' id='main-page-controller'>
          <div id='header'>
            <h1>Questions for the worlds</h1>
          </div>
          <div id='my-subjects'>
            <Subjects></Subjects>
          </div>
          <div id='make-quiz'>
            <QuizMaker></QuizMaker>
          </div>
          <div id='auth'>
            <Logout></Logout>
            <Link to='/tt/'>Take Test</Link>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, null)(MainPage);
