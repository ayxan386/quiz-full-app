import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import QuestionAdder from "./QuestionAdder";
import { addQuestion } from "../../reducers/reducerActions";
import SmallQuestion from "./SmallQuestion";
import { postQuestions } from "../../reducers/reducerMethods/QuestionMethods";
import checkAuth from "../../middlewares/IsAuth";

export class QuizMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false
    };
  }

  render() {
    return (
      checkAuth(this.props.token) || (
        <>
          <Helmet>
            <title>Make a Quiz</title>
          </Helmet>
          <div className='jumbotron flex-column align-items-center d-flex h-100'>
            <div className='question-form'>
              <div id='question-holder'>
                {this.props.questions
                  .filter((question, i) => i > this.props.questions.length - 2)
                  .map((question, i) => (
                    <SmallQuestion
                      question={question.question}
                      anss={question.options}
                      key={i}></SmallQuestion>
                  ))}
              </div>
              {/* End of question-holder */}
              <div id='question-adding' className='row align-content-center'>
                <QuestionAdder
                  addQuestion={this.props.question_add}></QuestionAdder>
              </div>
              {/* End of question-adder */}
            </div>
            <div className='submit-button-holder'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  this.props.send_question();
                }}>
                SEND
              </button>
            </div>
            <div id='rules'>
              <i>
                Carefully check your question and the answers before pressing
                the "Add Question button", as added question cannot be edited.
              </i>
            </div>
          </div>
        </>
      )
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
    question_add: question => dispatch(addQuestion(question)),
    send_question: () => dispatch(postQuestions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizMaker);
