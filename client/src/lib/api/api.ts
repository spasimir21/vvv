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

const onTokenLoaded = Storage.get({ key: 'token' }).then(result => {
  if (result.value != null) api.token = result.value;
});

function saveToken(token: string | null) {
  api.token = token;
  Storage.set({ key: 'token', value: token });
}

export { api, saveToken, onTokenLoaded, APIData };
