import { LogoSVGComponent } from '../../components/Svg/LogoSVGComponent';
import React from 'react';
import './LoginPage.scss';

function LoginPage() {
  return (
    <div className='login-page'>
      <div className='login-logo-group'>
        <LogoSVGComponent />
        <p>Welcome back</p>
      </div>
      <div className='login-form-container'>
        <div className='login-form-fields'>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
        </div>
        <div className='login-form-redirection'>
          <p>Don't have an account?</p>
          <a href=''>Sign Up</a>
        </div>
      </div>
      <a href='' className='login-button'>
        Sign In
      </a>
    </div>
  );
}

export { LoginPage };
