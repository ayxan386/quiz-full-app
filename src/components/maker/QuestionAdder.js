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
      answers: [...this.state.answers, this.state.answer],
      answer: ""
    });
  };

  render() {
    return (
      <>
        <form>
          <div className='form-group'>
            <label htmlFor='question'>Question: </label>
            <input
              name='question'
              className='input-group'
              onChange={this.handleChange}
              value={this.state.question}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='answer-button'>Answers: </label>
            <input
              type='text'
              onChange={this.handleChange}
              name='answer'
              className='input-group'
              value={this.state.answer}></input>
          </div>
          <div className='form-group'>
            <input
              type='button'
              name='answer-button'
              value='Add answer'
              className='btn btn-danger'
              onClick={() => {
                this.addAns();
              }}></input>
          </div>
          <button
            onClick={() => {
              this.props.addQuestion(this.getCollectedQuestion());
              this.props.remove();
            }}
            className='btn btn-primary'
            type='button'>
            Add Question
          </button>
        </form>
        <div id='answer-holder'>
          {this.state.answers.map(ans => (
            <div key={ans}>{ans}</div>
          ))}
        </div>
      </>
    );
  }
}

export default QuestionAdder;
