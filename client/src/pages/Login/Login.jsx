import { useState } from 'react';
import React from 'react';
import './Login.scss';

function Login() {
  return (
    <>
      <center>
        {' '}
        <p className='appnamelogo'>FOODY</p>
        <p className='createaccount'>Wellcome back</p>
        <form>
          <input type='text' className='username' placeholder='Username' /> <br />
          <input type='password' className='password' placeholder='Password' />
          <br />
          <p className='signin'>
            Already have an account? <a href='#'>Sign in</a>
          </p>
          <input type='submit' value='Sign in' />
        </form>
      </center>
    </>
  );
}

export { Login };
