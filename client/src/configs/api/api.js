import axios from 'axios';
import baseURL from 'configs/api/apiConstants';

const api = axios.create({
  baseURL,
});

export default api;
