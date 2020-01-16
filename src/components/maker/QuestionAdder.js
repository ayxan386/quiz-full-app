import React, { Component } from "react";
import SmallAnswer from "./SmallAnswer";

export class QuestionAdder extends Component {
  constructor(props) {
    super(props);

    this.state = this.initState;
  }

  initState = {
    question: "",
    answers: [],
    answer: "",
    collected_question: {},
    ans_index: -1
  };

  setAnswer = index => {
    this.setState({
      ans_index: index
    });
  };

  handleChange = e => {
    let a = {};
    a[e.target.name] = e.target.value;
    this.setState(a);
  };

  getCollectedQuestion = () => {
    const { question, answers, ans_index } = this.state;
    return {
      question,
      options: answers,
      answer: ans_index
    };
  };

  addAns = () => {
    if (this.state.answer.length > 0)
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
            <textarea
              name='question'
              className='input-group custom-text-area'
              onChange={this.handleChange}
              value={this.state.question}></textarea>
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
              if (
                this.state.answers.length > 0 &&
                this.state.question.length > 0 &&
                this.state.ans_index !== -1
              ) {
                this.props.addQuestion(this.getCollectedQuestion());
                this.setState(this.initState);
              }
            }}
            className='btn btn-primary'
            type='button'>
            Add Question
          </button>
        </form>
        <div id='answer-holder'>
          <ol>
            {this.state.answers.map((ans, i) => (
              <li key={i * 71}>
                <SmallAnswer
                  key={ans}
                  text={ans}
                  index={i}
                  setAnswer={this.setAnswer}></SmallAnswer>
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }
}

export default QuestionAdder;
