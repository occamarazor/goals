import { publicApi } from 'configs/api/api';
import { REGISTER_URL } from 'features/authentication/register/registerConstants';

const registerSubmitApi = (credentials) => publicApi.post(REGISTER_URL, credentials);

export default registerSubmitApi;
