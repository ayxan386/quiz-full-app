import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export class FacebookAuth extends Component {
  responseFacebook = res => {
    console.log(res);
  };

  render() {
    return (
      <span>
        <FacebookLogin
          appId='680916339111061'
          callback={this.responseFacebook}
          autoLoad={false}
          fields='name,email,picture'
          render={renderProps => (
            <button onClick={renderProps.onClick} className='facebook'>
              <i className='fab fa-facebook-square'></i>
            </button>
          )}
        />
      </span>
    );
  }
}

export default FacebookAuth;
