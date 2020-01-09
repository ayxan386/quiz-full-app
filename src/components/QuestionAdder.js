import React, { Component } from "react";

export class QuestionAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answers: [],
      answer: "",
      collected_question: {}
    };
  }
  handleChange = e => {
    let a = {};
    a[e.target.name] = e.target.value;
    this.setState(a);
  };

  getCollectedQuestion = () => {
    const { question, answers } = this.state;
    return {
      question,
      options: answers
    };
  };
  addAns = () => {
    this.setState({
      answers: [...this.state.answers, this.state.answer]
    });
  };

  render() {
    return (
      <form>
        <div className='form-group'>
          <label htmlFor='question'>Question: </label>
          <input
            type='text-area'
            name='question'
            onChange={this.handleChange}
            value={this.state.question}></input>
        </div>
        <div className='form-group'>
          <div id='answer-holder'>
            {this.state.answers.map(ans => (
              <div key={ans}>{ans}</div>
            ))}
          </div>
          <label htmlFor='answer-button'>Answers: </label>
          <input
            type='text'
            onChange={this.handleChange}
            name='answer'
            value={this.state.answer}></input>
          <input
            type='button'
            name='answer-button'
            value='Add answer'
            onClick={() => {
              this.addAns();
            }}></input>
        </div>
        <button
          onClick={() => {
            this.props.addQuestion(this.getCollectedQuestion());
            this.props.remove();
          }}
          type='button'>
          Add Question
        </button>
      </form>
    );
  }
}

export default QuestionAdder;
