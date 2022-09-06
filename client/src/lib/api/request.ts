import { APIData } from './api';

interface RequestOptions<TParams, TResult> {
  path: string;
  method: string;
}

interface SuccessfulRequestResponse<TResult> {
  success: true;
  result: TResult;
}

interface FailedRequestResponse {
  success: false;
  error: string;
}

type RequestResponse<TResult> = SuccessfulRequestResponse<TResult> | FailedRequestResponse;

type APIRequest<TParams, TResult> = (api: APIData, params: TParams) => Promise<RequestResponse<TResult>>;

function createRequest<TParams, TResult>(options: RequestOptions<TParams, TResult>): APIRequest<TParams, TResult> {
  return async (api: APIData, params: TParams) => {
    try {
      const req = await fetch(`${api.url}${options.path}`, {
        method: options.method,
        body: JSON.stringify(params),
        headers: new Headers({
          Token: api.token
        })
      });

      return await req.json();
    } catch {
      return { success: false, error: 'Network Error' };
    }
  };
}

export { APIData, createRequest, APIRequest, RequestResponse };
