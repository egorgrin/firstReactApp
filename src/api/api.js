import axios from 'axios';

const API_URL = 'http://localhost:5000/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export const authAPI = {
  auth: (username, password) => $api.post(`auth`, {username: username, password: password}),
  checkAuth: () => $api.get(`auth/check`),
};

export const usersAPI = {
  getUsers: () => $api.get(`users`),
  getUser: () => $api.get(`users`),
  getFriends: () => $api.get(`friends`),
};