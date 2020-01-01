import React, { Component } from "react";

export class Register extends Component {
  render() {
    return (
      <div className='jumbotron w-25'>
        <form>
          <header className='p-3'>User information</header>
          <div className='form-group'>
            <label htmlFor='name'>Name: </label>
            <input
              name='name'
              type='text'
              onChange={this.updateMe}
              className='form-control'></input>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>email: </label>
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
              className='form-control'></input>
          </div>
          <div className='form-group'>
            <label htmlFor='confirm-password'>Confirm Password: </label>
            <input
              name='confirm-password'
              type='password'
              onChange={this.updateMe}
              className='form-control'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
