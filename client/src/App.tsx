import React, { useState } from 'react';
import './app.scss';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { HomePage } from './pages/HomePage/HomePage';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import { ScannerTest } from './test/ScannerTest';
import {Footer} from './components/Footer/Footer'
import { ScanPage } from './pages/ScanPage/ScanPage';

function App() {
  return (
    <>

       <ThemeProvider theme={theme}>
      <ScanPage />
      </ThemeProvider> 
     {/* <ScannerTest /> */}
</>
  );
}

export { App };
