import React, { Component } from "react";

export class Answer extends Component {
  render() {
    let i = this.props.index;

    return (
      <label key={i * 31} className='answer-label'>
        <input
          type='radio'
          name={`question_${this.props.id}`}
          onChange={() => {
            this.props.submitted(this.props.id, i);
          }}
          checked={this.props.selected === i}></input>
        {this.props.answer}
      </label>
    );
  }
}

export default Answer;
