import { FoodyLogoSVG } from '../../assets/svg_react/FoodyLogoSVG';
import { useRequest } from '../../hooks/useRequest';
import { registerUser } from '../../lib/api/user';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../lib/api/api';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.scss';

function RegisterPage() {
  const [_, loading, sendRegister] = useRequest(registerUser);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function register() {
    sendRegister({ username, email, password }).then(result => {
      if (!result.success) return;
      saveToken(result.result.token);
      navigate('/products');
    });
  }

  return (
    <div className='register-page'>
      <div className='register-logo-group'>
        <FoodyLogoSVG />
        <p>Create your account</p>
      </div>
      <div className='register-form-container'>
        <div className='register-form-fields'>
          <input type='text' placeholder='Username' value={username} onChange={event => setUsername(event.target.value)} />
          <input type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className='register-form-redirection'>
          <p>Already have an account?</p>
          <Link to='/login'>Sign In</Link>
        </div>
      </div>
      <a className='register-button' onClick={register}>
        {loading ? '...' : 'Sign Up'}
      </a>
    </div>
  );
}

export { RegisterPage };
