import React, { Component } from "react";
import Helmet from "react-helmet";

export class SubjectSelector extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      subject: "", //this.randomSubject(),
      isValid: "isasd"
    };
  }

  handleChange = e => {
    this.props.checkSubject(e.target.value);
    this.setState({
      subject: e.target.value,
      isValid: this.props.isValid ? "is-valid" : "is-invalid"
    });
  };

  randomSubject = () => {
    while (true) {
      let len = Math.floor(Math.random() * 15);
      let str = "";
      for (let i = 0; i < len; i++) {
        str += String.fromCharCode(
          Math.floor(Math.random() * 26) + "a".charCodeAt(0)
        );
      }
      if (this.props.checkSubject(str)) return str;
    }
  };
  render() {
    console.log(this.props);

    return (
      <>
        <Helmet>
          <title>Choose Subject</title>
        </Helmet>
        <form>
          <div>
            <label htmlFor='subject'>
              Please choose a custom unique name or leave the randomly generated
              one
            </label>
            <input
              type='text'
              name='subject'
              value={this.state.subject}
              onChange={this.handleChange}
              className={`form-control ${this.state.isValid}`}></input>
          </div>
        </form>
      </>
    );
  }
}

export default SubjectSelector;
