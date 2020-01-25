import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export class FacebookAuth extends Component {
  mapResToCallBack = res => {
    this.props.callback(res.name, res.email, res.id);
  };
  render() {
    return (
      <span>
        <FacebookLogin
          appId='680916339111061'
          callback={this.mapResToCallBack}
          autoLoad={false}
          fields='name,email,picture'
          render={renderProps => (
            <i
              className='fab fa-facebook-square facebook'
              onClick={renderProps.onClick}></i>
          )}
        />
      </span>
    );
  }
}

export default FacebookAuth;
