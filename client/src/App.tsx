import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { ProductsPage } from './pages/ProductPage/ProductPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ScanPage } from './pages/ScanPage/ScanPage';
import { ThemeProvider } from '@mui/material';
import { APITest } from './test/APITest';
import { api, onTokenLoaded } from './lib/api/api';
import { theme } from './theme';
import React, { useEffect } from 'react';
import './app.scss';
import { HistoryPage } from './pages/HistoryPage/HistoryPage';
import { Navigation } from './components/NavBar/NavBar';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { SplashScreen } from '@capacitor/splash-screen';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onTokenLoaded.then(() => {
      if (api.token == null || api.token == 'null') navigate('/landing');
      else navigate('/products');
      setTimeout(() => SplashScreen.hide(), 100);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/details/:barcode" element={<ProductDetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export { App };
