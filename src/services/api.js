import axios from 'axios';

const API_URL = 'https://34.128.167.227/api';
//const API_URL = 'http://localhost:8080/api';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const getUsers = async () => {
  return await axios.get(API_URL);
};
