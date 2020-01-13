import React, { Component } from "react";
import "../css/form.css";
import Helmet from "react-helmet";
import { login_user } from "../reducers/reducerActions";
import { connect } from "react-redux";
import { checkAuthFrom } from "../middlewares/IsAuth";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
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
    const { name, password } = this.state;

    this.props.login(name, password);
    e.target.reset();
  };

  render() {
    return (
      checkAuthFrom(this.props.token) || (
        <>
          <Helmet>
            <title>Login Page</title>
          </Helmet>
          <div className='d-flex justify-content-center h-auto p-4'>
            <div className='jumbotron w-25 min-width'>
              <form onSubmit={this.login}>
                <legend className='p-3'>Login form</legend>
                <div className='form-group'>
                  <label htmlFor='name'>Please enter your name: </label>
                  <input
                    name='name'
                    type='text'
                    onChange={this.updateMe}
                    className='form-control'></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Please enter your password: </label>
                  <input
                    name='password'
                    type='password'
                    onChange={this.updateMe}
                    className={`form-control`}></input>
                </div>
                <button type='submit' className='btn btn-primary'>
                  LOGIN
                </button>
                {this.props.err.length > 0 ? (
                  <div>
                    <p className=''>{this.props.err}</p>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    err: state.error.err,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, pass) => dispatch(login_user(username, pass))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
