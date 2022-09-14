import { AddProductPage } from './pages/AddProductPage/AddProductPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { HistoryPage } from './pages/HistoryPage/HistoryPage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { SplashScreen } from '@capacitor/splash-screen';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ScanPage } from './pages/ScanPage/ScanPage';
import { api, onTokenLoaded } from './lib/api/api';
import React, { useEffect } from 'react';
import './global.scss';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onTokenLoaded.then(() => {
      if (api.token == null || api.token == '') navigate('/landing');
      else navigate('/products');

      setTimeout(() => SplashScreen.hide(), 100);
    });
  }, []);

  return (
    <Routes>
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/history' element={<HistoryPage />} />
      <Route path='/scan' element={<ScanPage />} />
      <Route path='/add/:barcode' element={<AddProductPage />} />
    </Routes>
  );
}

export { App };
