import axios from 'axios';
import baseURL from 'configs/api/apiConstants';
import { selectAuthentication } from 'features/authentication/authenticationSlice';

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const publicApi = axios.create({
  baseURL,
});

export const privateApi = axios.create({
  baseURL,
});

privateApi.interceptors.request.use((requestConfig) => {
  const {
    user: { token },
  } = selectAuthentication(store.getState());

  return {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});
