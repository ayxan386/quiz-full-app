import React, { Component } from "react";

export class SmallQuestion extends Component {
  render() {
    return (
      <div className='question'>
        <div className='question-header'>{this.props.question}</div>
        <div>
          <ol>
            {this.props.anss.map((ans, i) => (
              <li className='answer-item' key={i}>
                <div>{ans}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SmallQuestion;
