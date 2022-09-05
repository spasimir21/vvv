import { APIContext } from './contexts/APIContext';
import ReactDOM from 'react-dom/client';
import { api } from './lib/api/api';
import { App } from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <APIContext.Provider value={api}>
      <App />
    </APIContext.Provider>
  </React.StrictMode>
);
