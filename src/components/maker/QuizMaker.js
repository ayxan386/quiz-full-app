import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import QuestionAdder from "./QuestionAdder";
import { addQuestion } from "../../reducers/reducerActions";
import SmallQuestion from "./SmallQuestion";
import checkAuth from "../../middlewares/IsAuth";

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
    return (
      checkAuth(this.props.token) || (
        <>
          <Helmet>
            <title>Make a Quiz</title>
          </Helmet>
          <div className='jumbotron h-100'>
            <div id='question-holder'>
              {this.props.questions.map(question => (
                <SmallQuestion
                  question={question.question}
                  anss={question.options}></SmallQuestion>
              ))}
            </div>
            <div
              id='question-adding'
              className='align-items-center justify-content-center row'>
              {!this.state.isAdding ? (
                <button
                  onClick={() => this.addQuestion()}
                  className='btn btn-success'>
                  Add new Question
                </button>
              ) : (
                <QuestionAdder
                  remove={this.removeQuestionAdder}
                  addQuestion={this.props.question_add}></QuestionAdder>
              )}
            </div>
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    subject: state.maker.subject,
    questions: state.maker.questions,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    question_add: question => dispatch(addQuestion(question))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizMaker);
// export default connect(mapStateToProps, mapDispatchToProps)(QuizMaker);
