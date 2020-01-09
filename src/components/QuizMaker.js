import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import QuestionAdder from "./QuestionAdder";
import { addQuestion } from "../reducers/reducerActions";
import SmallQuestion from "./SmallQuestion";

export class QuizMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    };
  }

  addQuestion = () => {
    this.setState({
      isAdding: true
    });
  };
  removeQuestionAdder = () => {
    this.setState({
      isAdding: false
    });
  };

  render() {
    console.log(this.props);

    return (
      <>
        <Helmet>
          <title>Make a Quiz</title>
        </Helmet>
        <div id='question-holder'>
          {this.props.questions.map(question => (
            <SmallQuestion
              question={question.question}
              anss={question.options}></SmallQuestion>
          ))}
        </div>
        <div id='question-adding'>
          {!this.state.isAdding ? (
            <button onClick={() => this.addQuestion()}>Add new Question</button>
          ) : (
            <QuestionAdder
              remove={this.removeQuestionAdder}
              addQuestion={this.props.question_add}></QuestionAdder>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    subject: state.maker.subject,
    questions: state.maker.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    question_add: question => dispatch(addQuestion(question))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizMaker);
// export default connect(mapStateToProps, mapDispatchToProps)(QuizMaker);
