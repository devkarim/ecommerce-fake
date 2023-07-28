import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 5000,
  responseType: 'json',
});

export default client;
