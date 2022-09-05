import { APIContext } from './contexts/APIContext';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { api } from './lib/api/api';
import { App } from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContext.Provider value={api}>
        <App />
      </APIContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
