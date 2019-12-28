import React from "react";
import Question from "./components/Question";
// import ErrorDisplay from "./components/ErrorDisplay";
import bms from "./css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          text: "question 1",
          ans: [1, 2, 3, 4]
        },
        {
          id: 2,
          text: "question 2",
          ans: ["a", "b", "c", "d"]
        }
      ],
      user_ans: {},
      current_index: 0,
      err: ""
    };
  }

  change = (question_id, ans_number) => {
    let temp = {};
    temp[question_id] = ans_number;
    this.setState({
      user_ans: Object.assign(this.state.user_ans, temp)
    });
  };

  next_question = () => {
    const ci = this.state.current_index;
    if (ci + 1 < this.state.questions.length) {
      this.setState({
        current_index: this.state.current_index + 1
      });
    }
  };

  previouse_question = () => {
    const ci = this.state.current_index;
    if (ci > 0) {
      this.setState({
        current_index: this.state.current_index - 1
      });
    }
  };

  render() {
    let current_question = this.state.questions[this.state.current_index];
    return (
      <div className='App w-100 h-100 jumbotron' style={{ display: "flex" }}>
        <div className='container col-md-8 col-sm-10 align-items-center justify-items-center flex-column'>
          <div className='row'>
            <div
              className='col-3 justify-content-center align-content-center flex-md-column'
              style={{ display: "flex" }}>
              <button
                onClick={() => {
                  this.previouse_question();
                }}
                className='w-50'>
                LEFT
              </button>
            </div>
            <div className='col-6'>
              {
                <Question
                  key={current_question.id}
                  id={current_question.id}
                  selected={this.state.user_ans[current_question.id]}
                  question_text={current_question.text}
                  ans={current_question.ans}
                  submitted={this.change}></Question>
              }
            </div>
            <div
              className='col-3 justify-content-center align-content-center flex-md-column'
              style={{ display: "flex" }}>
              <button
                onClick={() => {
                  this.next_question();
                }}
                className='w-50'>
                RIGHT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
