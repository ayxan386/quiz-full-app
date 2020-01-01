import React from "react";
import Question from "./components/Question";
import ChangeButton from "./components/ChangeButton";
import Answer from "./components/Answer";
import SubmitButton from "./components/SubmitButton";
// import ErrorDisplay from "./components/ErrorDisplay";
import "./css/bootstrap.min.css";
import "./css/main.css";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      user_ans: {},
      current_index: 0,
      err: ""
    };
  }

  componentDidMount() {
    Axios.get(
      "https://aykhan-quiz-app-backend.herokuapp.com/api/question"
    ).then(res => {
      this.setState({
        questions: res.data
      });
    });
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

  submitFunc = () => {
    let answ = Object.keys(this.state.user_ans).map(question_id => {
      return {
        question_id,
        answer_number: this.state.user_ans[question_id]
      };
    });

    Axios.post("https://aykhan-quiz-app-backend.herokuapp.com/api/check", {
      anws: answ,
      ans_weight: 1
    }).then(res => {
      alert(res.data);
    });
  };

  render() {
    let current_question = this.state.questions[this.state.current_index];

    return (
      <div className='App w-100 h-100 jumbotron' style={{ display: "flex" }}>
        <div className='main-area'>
          <div className='question-container'>
            {current_question !== undefined ? (
              <Question question_text={current_question.question}></Question>
            ) : null}
          </div>

          <div className='answers-container'>
            {/* Previouse button */}
            <ChangeButton
              event={this.previouse_question}
              addClassName='justify-left'
              buttonClass='arrow left-arrow'></ChangeButton>
            {/* Holds answers */}
            <div className='answers-holder'>
              {current_question !== undefined
                ? current_question.options.map((a, i) => {
                    return (
                      <Answer
                        key={i * 62}
                        answer={a.content}
                        index={i}
                        id={current_question.id}
                        submitted={this.change}
                        selected={
                          this.state.user_ans[current_question.id]
                        }></Answer>
                    );
                  })
                : null}
            </div>

            <ChangeButton
              event={this.next_question}
              addClassName='self-justify-right'
              buttonClass='arrow right-arrow'></ChangeButton>
          </div>
          <SubmitButton submitFunc={() => this.submitFunc()}></SubmitButton>
        </div>
      </div>
    );
  }
}

export default App;
