import React, { Component } from "react";

export class ChangeButton extends Component {
  render() {
    let myClassName = `button-holder ${this.props.addClassName}`;
    return (
      <div className={myClassName}>
        <button
          onClick={() => {
            this.props.event();
          }}
          className={`${this.props.buttonClass}`}>
          {/* {this.props.text} */}
        </button>
      </div>
    );
  }
}

export default ChangeButton;
