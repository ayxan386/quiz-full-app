import React, { Component } from "react";
import "../../css/form.css";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register_temp } from "../../reducers/reducerMethods/AuthMethods";
import { checkTempAuthFrom } from "../../middlewares/IsAuth";
import SocialAuth from "./SocialAuth";

export class TempAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  updateMe = source => {
    let key = source.target.name;
    let temp_obj = {};
    temp_obj[key] = source.target.value;
    this.setState(temp_obj);
  };

  login = e => {
    e.preventDefault();
    const { name, email } = this.state;

    this.props.login(name, email);
    e.target.reset();
  };

  displayError = () => {
    return this.props.err && this.props.err.length > 0 ? (
      <div>
        <p className=''>{this.props.err}</p>
      </div>
    ) : null;
  };

  callback = (name, email, password) => {
    this.props.login(name, email);
  };

  getSubject = () => {
    const start = "/temp/form/";
    const url = window.location.href;
    const params = url.substring(url.indexOf(start) + start.length).split("/");

    return (params && params.length > 0 && params[0]) || "";
  };

  render() {
    return !checkTempAuthFrom(this.props.token) ? (
      <Redirect to={`/ss/${this.getSubject()}`}></Redirect>
    ) : (
      <>
        <Helmet>
          <title>Enter Page</title>
        </Helmet>
        <div className='row p-4 h-100'>
          <div className='jumbotron w-25 min-width m-auto'>
            <form onSubmit={this.login}>
              <div className='form-group'>
                <label htmlFor='name'>Please enter your full name: </label>
                <input
                  name='name'
                  type='text'
                  onChange={this.updateMe}
                  className='form-control'></input>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Please enter your email: </label>
                <input
                  name='email'
                  type='email'
                  onChange={this.updateMe}
                  className={`form-control`}></input>
              </div>
              <div className='row m-auto'>
                <button type='submit' className='btn btn-primary'>
                  Take Test
                </button>
                <span>
                  <SocialAuth callback={this.callback}></SocialAuth>
                </span>
              </div>
              {this.displayError()}
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    err: state.error.err,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, pass) => dispatch(register_temp(username, pass))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TempAccount);
