import React, { Component } from "react";

export class SmallQuestion extends Component {
  render() {
    return (
      <div>
        <div className='question-header'>{this.props.question}</div>
        <div>
          <ol>
            {this.props.anss.map(ans => (
              <li className='answer-item'>
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
