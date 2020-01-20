import React, { Component } from "react";

export class Question extends Component {
  render() {
    return (
      <div className='p-2 '>
        <header className='question-header'>
          {this.props.isLoaded ? (
            <h3>{this.props.question_text}</h3>
          ) : (
            <div class='lds-spinner'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default Question;
