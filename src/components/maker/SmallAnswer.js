import React, { Component } from "react";

export class SmallAnswer extends Component {
  render() {
    return (
      <div className='row space-between w-100'>
        <label className='answer-label'>
          <input
            type='radio'
            name='answers'
            className='answer-checkbox'
            onClick={() => {
              this.props.setAnswer(this.props.index);
            }}></input>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default SmallAnswer;
