import { Storage } from '@capacitor/storage';
import { BASE_API_URL } from '../../config';

interface APIData {
  url: string;
  token: string | null;
}

const api: APIData = {
  url: BASE_API_URL,
  token: null
};

Storage.get({ key: 'token' }).then(result => {
  if (result.value != null) api.token = result.value;
});

api.token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVzZXJuYW1lIjoiU3Bhc2ltaXIgUGF2bG92IiwiaWF0IjoxNjYyNDc1MDE5fQ.RVCa7bniHaJaCjKwtWfOQ_tEYmdHlV9JBozfCeisF3A';

export { api, APIData };
