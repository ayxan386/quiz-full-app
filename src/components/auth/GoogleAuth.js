import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class GoogleAuth extends Component {
  mapResToCallBack = res => {
    const { name, email, googleId } = res.profileObj;
    this.props.callback(name, email, googleId);
  };

  render() {
    return (
      <span>
        <GoogleLogin
          clientId='945153332711-siglhggl20rtescpngke4a73rt4ts29d.apps.googleusercontent.com'
          onSuccess={this.mapResToCallBack}
          onFailure={res => console.log(res)}
          cookiePolicy={"single_host_origin"}
          render={renderProps => (
            <i
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className='fab fa-google google'></i>
          )}
        />
      </span>
    );
  }
}

export default GoogleAuth;
