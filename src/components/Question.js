import React, { Component } from "react";
import ChangeButton from "./ChangeButton";
import Answer from "./Answer";
import main from "../css/main.css";

export class Question extends Component {
  render() {
    return (
      <div className='p-3 '>
        <header className='question-header'>{this.props.question_text}</header>
      </div>
    );
  }
}

export default Question;
