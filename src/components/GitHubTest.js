import React, { Component } from "react";
import { connect } from "react-redux";
import FacebookAuth from "./auth/FacebookAuth";

export class MakeQuestion extends Component {
  render() {
    return (
      <div>
        <h1>Question Making</h1>
        {true || this.state.isFb ? <FacebookAuth></FacebookAuth> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MakeQuestion);
