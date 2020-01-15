import React, { Component } from "react";

export class SubmitButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.submitFunc} className='btn btn-dark'>
          FINISH TEST
        </button>
      </div>
    );
  }
}

export default SubmitButton;
