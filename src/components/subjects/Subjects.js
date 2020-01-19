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
      <div>
        {this.props.subjects.map((subject, i) => {
          return (
            <Link key={i} to={`/ss/${subject}`}>
              <div>{subject}</div>
            </Link>
          );
        })}
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
