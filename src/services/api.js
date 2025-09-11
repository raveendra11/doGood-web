import axios from 'axios';

//const API_URL = 'https://dogood-1030922974196.europe-west1.run.app/api/users';
const API_URL = 'http://localhost:8080/api';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const getUsers = async () => {
  return await axios.get(API_URL);
};
