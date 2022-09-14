import { APIContext } from './contexts/APIContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { theme } from './config/theme';
import { api } from './lib/api/api';
import { App } from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <APIContext.Provider value={api}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </APIContext.Provider>
);
