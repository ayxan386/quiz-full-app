import React, { Component } from "react";

export class LinkCopier extends Component {
  render() {
    return (
      <div className='link-copier'>
        <label>
          Copy and share this link:{" "}
          <input value={this.props.link} readOnly></input>
        </label>
      </div>
    );
  }
}

export default LinkCopier;
