import React from "react";
import Question from "./components/Question";
import ChangeButton from "./components/ChangeButton";
import Answer from "./components/Answer";
// import ErrorDisplay from "./components/ErrorDisplay";
import "./css/bootstrap.min.css";
import "./css/main.css";

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
        <div className='main-area'>
          <div className='question-container'>
            <Question question_text={current_question.text}></Question>
          </div>

          <div className='answers-container'>
            {/* Previouse button */}
            <ChangeButton
              event={this.previouse_question}
              addClassName='justify-left'
              buttonClass='arrow left-arrow'></ChangeButton>
            {/* Holds answers */}
            <div className='answers-holder'>
              {current_question.ans.map((a, i) => {
                return (
                  <Answer
                    key={i * 62}
                    answer={a}
                    index={i}
                    id={current_question.id}
                    submitted={this.change}
                    selected={
                      this.state.user_ans[current_question.id]
                    }></Answer>
                );
              })}
            </div>

            <ChangeButton
              event={this.next_question}
              addClassName='self-justify-right'
              buttonClass='arrow right-arrow'></ChangeButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
