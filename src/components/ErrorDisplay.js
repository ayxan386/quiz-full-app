import React, { Component } from "react";

export class ErrorDisplay extends Component {
  render() {
    return <div>{this.props.msg}</div>;
  }
}

export default ErrorDisplay;
