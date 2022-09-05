import React, { useState } from 'react';
import './app.scss';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { HomePage } from './pages/HomePage/HomePage';
import {theme} from './theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <HomePage />
      </ThemeProvider>
    </>
  );
}

export { App };