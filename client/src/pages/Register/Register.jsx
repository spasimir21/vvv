import { useState } from 'react';
import React from 'react';
import './Register.scss';

function Register() {
  return (
    <>
     <center> <p className="appnamelogo">FOODY</p>
      <p className="createaccount">Create your account</p>
      <form>
        <input type="email" className="email" placeholder="Email"/> <br />
        <input type="text" className="username" placeholder="Username"/> <br />
        <input type="password" className="password" placeholder="Password"/><br />
        <p className="signin">Already have an account? <a href="#">Sign in</a></p>
        <input type="submit" value="Sign up" />
      </form>
      </center>
    </>
  );
}

export { Register };
