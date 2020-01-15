import React, { Component } from "react";
import QuizMaker from "./maker/QuizMaker";
import Subjects from "./subjects/Subjects";
import checkAuth from "../middlewares/IsAuth";
import { connect } from "react-redux";

export class MainPage extends Component {
  render() {
    return (
      // checkAuth(this.props.token)
      <div className='' id='main-page-controller'>
        <div id='my-subjects'>
          <Subjects></Subjects>
        </div>
        <div id='make-quiz'>
          <QuizMaker></QuizMaker>
        </div>
        <div id='auth'>LOGOUT</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, null)(MainPage);
