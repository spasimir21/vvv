import { LandingPage } from './pages/LandingPage/LandingPage';
import { Register } from './pages/Register/Register';
import { HomePage } from './pages/HomePage/HomePage';
import { ScannerTest } from './test/ScannerTest';
import { ThemeProvider } from '@mui/material';
import { APITest } from './test/APITest';
import { theme } from './theme';
import React from 'react';
import './app.scss';
import { HistoryPage } from './pages/HistoryPage/HistoryPage';
 import { Navigation } from './components/NavBar/NavBar';
import { ProductsPage } from './pages/ProductPage/ProductPage';
import { Login } from './pages/Login/Login';
import {ScanPage} from './pages/ScanPage/ScanPage'
function App() {
  return (
    <>
      {/* <div onClick={() => setIsShown(!isShown)}>
        Text
        <div className={isShown ? 'show' : 'notshown'}>Sub Text</div>
      </div> */}
        <ThemeProvider theme={theme}>
      <LandingPage />
       {/* <Navigation /> */}
      </ThemeProvider> 
     {/* <ScannerTest /> */}
</>
  );
}

export { App };
