import React from "react";
import Question from "./Question";
import ChangeButton from "./ChangeButton";
import Answer from "./Answer";
import SubmitButton from "./SubmitButton";
import "../../css/bootstrap.min.css";
import "../../css/main.css";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import {
  next_question,
  prev_question,
  load_questions,
  addAnswer,
  submitAnswer
} from "../../reducers/reducerActions";
import checkAuth from "../../middlewares/IsAuth";

class App extends React.Component {
  componentDidMount() {
    this.props.load("");
  }

  submitFunc = () => {};

  render() {
    let current_question = this.props.isLoaded
      ? this.props.questions[this.props.current_index]
      : undefined;

    return (
      checkAuth(this.props.token) || (
        <>
          <Helmet>
            <title>Test Page</title>
          </Helmet>
          <div
            className='App w-100 h-100 jumbotron'
            style={{ display: "flex" }}>
            <div className='main-area'>
              <div className='question-container'>
                {this.props.isLoaded ? (
                  <Question
                    question_text={current_question.question}></Question>
                ) : (
                  <div
                    style={{
                      width: "45rem",
                      height: "10rem"
                    }}></div>
                )}
              </div>

              <div className='answers-container'>
                {/* Previouse button */}
                <ChangeButton
                  event={this.props.prev_question}
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
                            index={a.id}
                            id={current_question.id}
                            submitted={this.props.change}
                            selected={
                              this.props.user_ans[current_question.id]
                            }></Answer>
                        );
                      })
                    : null}
                </div>

                <ChangeButton
                  event={this.props.next_question}
                  addClassName='self-justify-right'
                  buttonClass='arrow right-arrow'></ChangeButton>
              </div>
              <SubmitButton
                submitFunc={() => this.props.submitAnss()}></SubmitButton>
              <h1>{this.props.result}</h1>
            </div>
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.switching.questions,
    current_index: state.switching.currentIndex,
    user_ans: state.switching.user_ans,
    isLoaded: state.switching.isLoaded,
    result: state.switching.result,
    token: state.auth.token
  };
};

const mapDispathcToProps = dispatch => {
  return {
    next_question: () => dispatch(next_question()),
    prev_question: () => dispatch(prev_question()),
    load: group => dispatch(load_questions(group)),
    submitAnss: () => dispatch(submitAnswer()),
    change: (q, a) => dispatch(addAnswer(q, a))
  };
};

export default connect(mapStateToProps, mapDispathcToProps)(App);
