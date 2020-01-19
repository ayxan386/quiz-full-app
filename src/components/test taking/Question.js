import React, { Component } from "react";

export class Question extends Component {
  render() {
    return (
      <div className='p-3 '>
        <header className='question-header'>
          {this.props.isLoaded ? (
            this.props.question_text
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
