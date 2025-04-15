import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // back-end rodando nessa porta
});

export default api;
