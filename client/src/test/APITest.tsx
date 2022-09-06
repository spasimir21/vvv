import { createRequest } from '../lib/api/request';
import { useRequest } from '../hooks/useRequest';
import React, { useState } from 'react';

function APITest() {
  const [result, loading, send] = useRequest(createRequest<any, any>({ path: '/user/register', method: 'POST' }));

  return (
    <>
      <p>{loading ? 'Loading...' : JSON.stringify(result)}</p>
      <button onClick={() => send({ email: 'spasimir.pavlov@gmail.com', username: 'Spasimir Pavlov', password: '123456789' })}>
        Send
      </button>
    </>
  );
}

export { APITest };
