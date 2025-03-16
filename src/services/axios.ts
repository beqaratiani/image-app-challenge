import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '49354396-ffc18b5a2aa1d49a0748ec32e',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('MockToken');

    if (!token) {
      return Promise.reject({
        response: { status: 401, message: 'Unauthorized: No token provided' }, // This would be handled by backend in real apps
      });
    }

    // Also, in real application I would pass the Bearer token in header for backend but it is prevented now because of CORS.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('MockToken');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

export const mockAxios = Axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
