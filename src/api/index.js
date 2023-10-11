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

export const auth = (username, password) => $api.post(`auth`, {username: username, password: password});

export const checkAuth = () => $api.get(`auth/check`);

export const fetchUsers = () => $api.get(`users`);

export const fetchUser = () => $api.get(`users`);

export const fetchFriends = () => $api.get(`friends`);