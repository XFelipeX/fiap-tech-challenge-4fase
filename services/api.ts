import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
