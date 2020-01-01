import React, { Component } from "react";
import "../css/form.css";
import Helmet from "react-helmet";

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

  render() {
    return (
      <>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <div className='d-flex justify-content-center h-auto p-4'>
          <div className='jumbotron w-25 min-width'>
            <form>
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
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
