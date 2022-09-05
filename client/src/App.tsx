import React, { useState } from 'react';
import './app.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button className='button' onClick={() => setCount(count + 1)}>
        Add
      </button>
    </>
  );
}

export { App };
