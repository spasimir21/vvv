import { APIRequest, RequestResponse } from '../lib/api/request';
import { APIContext } from '../contexts/APIContext';
import { useContext, useState } from 'react';

function useHook<TParams, TResult>(
  request: APIRequest<TParams, TResult>
): [RequestResponse<TResult> | null, boolean, (params: TParams) => void] {
  const api = useContext(APIContext);

  const [result, setResult] = useState<RequestResponse<TResult> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const send = (params: TParams) => {
    setLoading(true);
    request(api, params).then(_result => {
      setResult(_result);
      setLoading(false);
    });
  };

  return [result, loading, send];
}
