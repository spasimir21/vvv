import { useState } from 'react';
import React from 'react';
import './app.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export { App };