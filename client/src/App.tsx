import { useState } from 'react';
import './app.scss';
import React from 'react'
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage/>
    </>
  );
}

export { App };
