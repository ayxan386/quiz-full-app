import React, { Component } from "react";
import QuizMaker from "./maker/QuizMaker";
import Subjects from "./subjects/Subjects";
import Logout from "./auth/Logout";
import checkAuth from "../middlewares/IsAuth";
import LinkCopier from "./LinkCopier/LinkCopier";
import { connect } from "react-redux";

export class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      showCopy: false,
      urlToCopy: ""
    };
  }
  activeLink = subjectName => {
    const patt = "/index";
    const url = window.location.href;
    this.setState({
      urlToCopy: `${url.substring(0, url.indexOf(patt))}/${subjectName}`,
      showCopy: true
    });
  };
  remove = () => {
    this.setState({
      showCopy: false,
      urlToCopy: ""
    });
  };
  render() {
    return (
      checkAuth(this.props.token) || (
        <div className='' id='main-page-controller'>
          <div id='header'>
            <h1>Questions for the worlds</h1>
          </div>
          <div id='my-subjects'>
            <Subjects activeLink={this.activeLink}></Subjects>
          </div>
          <div id='make-quiz'>
            <QuizMaker></QuizMaker>
          </div>
          <div id='auth'>
            <Logout></Logout>
            {/* <Link to='/tt/'>Take Test</Link> */}
          </div>
          {this.state.showCopy ? (
            <div id='copy'>
              <LinkCopier link={this.state.urlToCopy}></LinkCopier>
              <i
                className='fas fa-times exit'
                onClick={() => this.remove()}></i>
            </div>
          ) : null}
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
