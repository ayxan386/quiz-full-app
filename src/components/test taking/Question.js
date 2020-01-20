import React, { Component } from "react";

export class Question extends Component {
  render() {
    return (
      <header className='question-header'>
        {this.props.isLoaded ? (
          <h3>{this.props.question_text}</h3>
        ) : (
          <div className='lds-spinner'>
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
    );
  }
}

export default Question;
