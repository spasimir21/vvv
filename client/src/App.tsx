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
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Login } from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // return (
  //   <>
  //     {/* <div onClick={() => setIsShown(!isShown)}>
  //       Text
  //       <div className={isShown ? 'show' : 'notshown'}>Sub Text</div>
  //     </div> */}
  //     <ThemeProvider theme={theme}>
  //       <ProductsPage />
  //       <Navigation />
  //     </ThemeProvider>
  //     {/* <ScannerTest /> */}
  //   </>
  // );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<RegisterPage />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export { App };
