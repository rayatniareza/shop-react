import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    // Add any default headers here
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
