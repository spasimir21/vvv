import { BASE_API_URL } from '../config/config';
import { APIData } from '../lib/api/request';
import { createContext } from 'react';

const APIContext = createContext<APIData>({ url: BASE_API_URL, token: null });

export { APIContext };
