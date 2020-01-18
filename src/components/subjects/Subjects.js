import React, { Component } from "react";
import { connect } from "react-redux";
import { getSubjects } from "../../reducers/reducerMethods/SubjectMethods";

export class Subjects extends Component {
  componentDidMount() {
    if (!this.props.subjects || this.props.subjects.length < 1) {
      this.props.getSubs();
    }
  }

  render() {
    return (
      <div>
        {this.props.subjects.map(subject => {
          return <div key={subject}>{subject}</div>;
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
