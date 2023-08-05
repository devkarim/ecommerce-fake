import axios from 'axios';

const client = axios.create({
  baseURL:
    process.env.NODE_ENV == 'production'
      ? 'http://admin.ecommerce-fake.karimwael.com/api'
      : 'http://localhost:3001/api',
  timeout: 5000,
  responseType: 'json',
});

export default client;
