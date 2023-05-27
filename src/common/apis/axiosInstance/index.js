import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:8079/',
  headers: {
    // Add any default headers here
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
