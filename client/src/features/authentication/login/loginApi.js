import api from 'configs/api/api';
import { LOGIN_URL } from 'features/authentication/login/loginConstants';

const loginSubmitApi = (credentials) => api.post(LOGIN_URL, credentials);

export default loginSubmitApi;
