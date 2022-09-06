import { LogoSVGComponent } from '../../components/Svg/LogoSVGComponent';
import React from 'react';
import './RegisterPage.scss';

function RegisterPage() {
  return (
    <div className='register-page'>
      <div className='register-logo-group'>
        <LogoSVGComponent />
        <p>Welcome</p>
      </div>
      <div className='register-form-container'>
        <div className='register-form-fields'>
          <input type='text' placeholder='Username' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
        </div>
        <div className='register-form-redirection'>
          <p>Already have an account?</p>
          <a href=''>Sign In</a>
        </div>
      </div>
      <a href='' className='register-button'>
        Sign Up
      </a>
    </div>
  );
}

export { RegisterPage };
