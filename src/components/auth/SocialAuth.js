import React, { Component } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SocialAuth);
