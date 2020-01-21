import React, { Component } from "react";
import { connect } from "react-redux";
import { getSubjects } from "../../reducers/reducerMethods/SubjectMethods";
import { Link } from "react-router-dom";

export class Subjects extends Component {
  componentDidMount() {
    // if (!this.props.subjects || this.props.subjects.length < 1) {
    this.props.getSubs();
    // }
  }

  render() {
    return (
      <div className='grid-2-rows'>
        <div id='subjects-header'>Your Quizes</div>
        <div id='subject-holder'>
          {this.props.subjects.map((subject, i) => {
            return (
              <div className='row'>
                <button
                  onClick={() => {
                    this.props.activeLink(subject);
                  }}>
                  <i class='fas fa-share-square'></i>
                </button>
                <Link key={i} to={`/ss/${subject}`}>
                  <div>{subject}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subjects: state.subjects.subjects
});

const mapDispatchToProps = dispatch => {
  return {
    getSubs: () => dispatch(getSubjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
