import { APIRequest, RequestResponse } from '../lib/api/request';
import { APIContext } from '../contexts/APIContext';
import { useContext, useState } from 'react';

function useRequest<TParams, TResult>(
  request: APIRequest<TParams, TResult>
): [RequestResponse<TResult> | null, boolean, (params: TParams) => Promise<RequestResponse<TResult>>] {
  const api = useContext(APIContext);

  const [result, setResult] = useState<RequestResponse<TResult> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const send = (params: TParams) => {
    setLoading(true);
    const req = request(api, params);

    req.then(_result => {
      setResult(_result);
      setLoading(false);
    });

    return req;
  };

  return [result, loading, send];
}

export { useRequest };
