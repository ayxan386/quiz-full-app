import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../reducers/reducerActions";

export class Logout extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.logoutMe();
        }}>
        Logout
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    logoutMe: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
