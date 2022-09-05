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

export { api, APIData };
