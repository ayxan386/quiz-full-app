import React, { Component } from "react";
import { connect } from "react-redux";

export class ResultsPage extends Component {
  render() {
    return (
      <div className='results-container'>
        <div className='results-area'>
          {this.props.isLoaded ? (
            <div className='result'>
              <h1>
                Congratulations,you got{" "}
                <span className='text-red'>{this.props.result}</span>.
              </h1>
            </div>
          ) : (
            <div className='lds-spinner'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.switching.result,
  isLoaded: state.switching.isLoaded
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
