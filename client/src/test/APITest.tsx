import { createRequest } from '../lib/api/request';
import { useRequest } from '../hooks/useRequest';
import React, { useState } from 'react';

function APITest() {
  const [result, loading, send] = useRequest(createRequest<any, any>({ path: '/product/update', method: 'PATCH' }));

  const params = {
    productId: 1,
    price: 7.5,
    expirationDate: Date.now()
  };

  return (
    <>
      <p>{loading ? 'Loading...' : JSON.stringify(result)}</p>
      <button onClick={() => send(params)}>Send</button>
    </>
  );
}

export { APITest };
