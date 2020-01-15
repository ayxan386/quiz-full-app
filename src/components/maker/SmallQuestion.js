import React, { Component } from "react";

export class SmallQuestion extends Component {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
        <div>
          {this.props.anss.map(ans => (
            <div>{ans}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default SmallQuestion;
