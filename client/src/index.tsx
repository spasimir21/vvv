import { APIContext } from './contexts/APIContext';
import ReactDOM from 'react-dom/client';
import { api } from './lib/api/api';
import { App } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  // <React.StrictMode>
  <APIContext.Provider value={api}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </APIContext.Provider>
  // </React.StrictMode>
);
