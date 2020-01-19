import React, { Component } from "react";

export class SmallAnswer extends Component {
  render() {
    return (
      <label className='answer-label row'>
        <span>{this.props.index + 1}.</span>
        <input
          type='radio'
          name='answers'
          className='answer-checkbox'
          onClick={() => {
            this.props.setAnswer(this.props.index);
          }}></input>
        <span>{this.props.text}</span>
      </label>
    );
  }
}

export default SmallAnswer;
