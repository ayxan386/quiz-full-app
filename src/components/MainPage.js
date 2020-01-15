import React, { Component } from "react";
import { Link } from "react-router-dom";
import checkAuth from "../middlewares/IsAuth";
import { connect } from "react-redux";

export class MainPage extends Component {
  render() {
    return (
      checkAuth(this.props.token) || (
        <div className='row justify-content-center'>
          <Link to='/takeTest'>Take Test</Link>
          <Link to='/ss'>Make Test</Link>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, null)(MainPage);
