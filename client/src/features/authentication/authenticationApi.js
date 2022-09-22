import api from 'configs/api/api';
import { AUTHENTICATION_LOGIN_URL } from 'features/authentication/authenticationConstants';

const authenticationSubmitLoginApi = (credentials) =>
  api.post(AUTHENTICATION_LOGIN_URL, credentials);

export default authenticationSubmitLoginApi;
