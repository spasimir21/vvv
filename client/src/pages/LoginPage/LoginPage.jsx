import { FoodyLogoSVG } from '../../assets/svg_react/FoodyLogoSVG';
import { useRequest } from '../../hooks/useRequest';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../lib/api/user';
import { saveToken } from '../../lib/api/api';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
  const [_, loading, sendLogin] = useRequest(loginUser);
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function login() {
    sendLogin({ email, password }).then(result => {
      if (!result.success) return;
      saveToken(result.result.token);
      navigate('/products');
    });
  }

  return (
    <div className='login-page'>
      <div className='login-logo-group'>
        <FoodyLogoSVG />
        <p>Welcome back</p>
      </div>
      <div className='login-form-container'>
        <div className='login-form-fields'>
          <input type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className='login-form-redirection'>
          <p>Don't have an account?</p>
          <Link to='/register'>Sign Up</Link>
        </div>
      </div>
      <a className='login-button' onClick={login}>
        {loading ? '...' : 'Sign In'}
      </a>
    </div>
  );
}

export { LoginPage };
