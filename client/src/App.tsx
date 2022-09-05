import React, { useState } from 'react';
import './app.scss';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <>
      <LandingPage/>
    </>
  );
}

export { App };