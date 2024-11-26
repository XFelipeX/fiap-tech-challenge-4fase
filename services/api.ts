import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setupInterceptors = () => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // navigation.navigate('Login');
      }
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    async (config) => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `${token}`;
        }
      } catch (error) {
        console.error('Erro ao recuperar o token: ', error);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};

export { api, setupInterceptors };
