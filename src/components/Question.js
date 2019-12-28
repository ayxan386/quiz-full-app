import React, { Component } from "react";
import bms from "../css/bootstrap.min.css";

export class Question extends Component {
  render() {
    return (
      <div className='bg-dark p-3 border-dark '>
        <header>{this.props.question_text}</header>
        <div className='answers-holder'>
          {this.props.ans.map((a, i) => {
            return (
              <div key={i * 31}>
                <input
                  type='radio'
                  name={`question_${this.props.id}`}
                  onChange={() => {
                    this.props.submitted(this.props.id, i);
                  }}
                  checked={this.props.selected === i}></input>
                {a}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Question;
