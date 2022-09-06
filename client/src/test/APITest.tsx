import { createRequest } from '../lib/api/request';
import { useRequest } from '../hooks/useRequest';
import React, { useState } from 'react';

function APITest() {
  const [result, loading, send] = useRequest(createRequest<any, any>({ path: '/', method: 'POST' }));

  return (
    <>
      <p>{loading ? 'Loading...' : JSON.stringify(result)}</p>
      <button onClick={() => send({ text: 'Hello, world!' })}>Send</button>
    </>
  );
}

export { APITest };
