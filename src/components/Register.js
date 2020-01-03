import React, { Component } from "react";
import "../css/form.css";
import Helmet from "react-helmet";
import { register_user } from "../reducers/reducerActions";
import { connect } from "react-redux";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      cpassword: "",
      email: ""
    };
  }

  updateMe = source => {
    let key = source.target.name;
    let temp_obj = {};
    temp_obj[key] = source.target.value;
    this.setState(temp_obj);

    switch (key) {
      case "cpassword":
        this.checkMatchin(this.state.password, source.target.value);
        break;
      case "password":
        this.checkStrength(source.target.value);
        break;
      default:
        console.log("uuummm");
    }
  };

  checkMatchin = (pass, cpass) => {
    let isValid = pass === cpass ? "is-valid" : "is-invalid";
    this.setState({
      isMathcing: isValid
    });
  };

  checkStrength = pass => {
    //got here :https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/ :D
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    let isValid = strongRegex.test(pass) ? "is-valid" : "is-invalid";
    this.setState({
      isStrong: isValid
    });
  };

  sendData = e => {
    e.preventDefault();
    const { name, password, email } = this.state;
    this.props.register(name, email, password, true);
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Registration Page</title>
        </Helmet>
        <div className='d-flex justify-content-center h-auto p-4'>
          <div className='jumbotron w-25 min-width'>
            <form onSubmit={this.sendData}>
              <legend className='p-3'>User information</legend>
              <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input
                  name='name'
                  type='text'
                  onChange={this.updateMe}
                  className='form-control'></input>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input
                  name='email'
                  type='email'
                  onChange={this.updateMe}
                  className='form-control'></input>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <input
                  name='password'
                  type='password'
                  onChange={this.updateMe}
                  className={`form-control ${this.state.isStrong}`}></input>
              </div>
              <div className='form-group'>
                <label htmlFor='cpassword'>Confirm Password: </label>
                <input
                  name='cpassword'
                  type='password'
                  onChange={this.updateMe}
                  className={`form-control ${this.state.isMathcing}`}></input>
              </div>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = distapch => {
  return {
    register: (username, email, password, isMaker) =>
      distapch(register_user(username, email, password, isMaker))
  };
};

export default connect(null, mapDispatchToProps)(Register);
