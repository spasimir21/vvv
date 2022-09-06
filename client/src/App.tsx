import { LandingPage } from './pages/LandingPage/LandingPage';
import { Register } from './pages/Register/Register';
import { HomePage } from './pages/HomePage/HomePage';
import { ScannerTest } from './test/ScannerTest';
import { ThemeProvider } from '@mui/material';
import { Login } from './pages/Login/Login';
import { APITest } from './test/APITest';
import { theme } from './theme';
import React from 'react';
import './app.scss';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <APITest />
      </ThemeProvider>
    </>
  );
}

export { App };
