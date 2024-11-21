import axios from 'axios';
import { BACKEND_URL } from "@env"

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };