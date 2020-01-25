import React, { Component } from "react";
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";

export class SocialAuth extends Component {
  render() {
    return (
      <span>
        <FacebookAuth callback={this.props.callback}></FacebookAuth>
        <GoogleAuth callback={this.props.callback}></GoogleAuth>
      </span>
    );
  }
}

export default SocialAuth;
