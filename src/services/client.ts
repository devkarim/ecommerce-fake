import axios from 'axios';

import { isProd } from '@/config/constants';

const client = axios.create({
  baseURL: isProd
    ? 'https://admin.ecommerce-fake.karimwael.com/api'
    : 'http://localhost:3001/api',
  timeout: 5000,
  responseType: 'json',
});

export default client;
