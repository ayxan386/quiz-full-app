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
      // checkAuth(this.props.token) || (
      <>
        <Helmet>
          <title>Make a Quiz</title>
        </Helmet>
        <div className='jumbotron flex-column align-items-center d-flex space-between h-100'>
          <div className='row h-100 space-between align-items-center w-100'>
            <div id='question-holder'>
              {this.props.questions.map(question => (
                <SmallQuestion
                  question={question.question}
                  anss={question.options}></SmallQuestion>
              ))}
            </div>
            {/* End of question-holder */}
            <div id='question-adding' className='row align-content-center'>
              <div className='row align-items-center p-4 border-dark space-evenly w-100'>
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
            {/* End of question-adder */}
          </div>
          <div>
            <button className='btn btn-primary'>SEND</button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
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
