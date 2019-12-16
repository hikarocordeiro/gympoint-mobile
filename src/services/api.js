import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.248:3333',
});

export default api;
