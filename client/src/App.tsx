import React, { useState } from 'react';
import './app.scss';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Register } from './pages/Register/Register';
// import { Login } from './pages/Login/Login';
import { HomePage } from './pages/HomePage/HomePage';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import { ScannerTest } from './test/ScannerTest';
 import { Navigation } from './components/NavBar/NavBar';
import { ProductsPage } from './pages/ProductPage/ProductPage';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <>
      {/* <div onClick={() => setIsShown(!isShown)}>
        Text
        <div className={isShown ? 'show' : 'notshown'}>Sub Text</div>
      </div> */}
        <ThemeProvider theme={theme}>
      <ProductsPage />
       <Navigation />
      </ThemeProvider> 
     {/* <ScannerTest /> */}
</>
  );
}

export { App };
