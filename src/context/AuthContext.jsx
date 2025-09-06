import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:8087';       // optional: centralize
axios.defaults.withCredentials = true;                // uncomment if backend uses cookies/sessions

const AuthContext = createContext();
export function useAuth() { return useContext(AuthContext); }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // ⬇️ Load user on refresh
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setCurrentUser(JSON.parse(stored));
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('http://localhost:8087/api/users/login', { email, password });
      console.log('login payload:', data);
      setCurrentUser(data);
      localStorage.setItem('user', JSON.stringify(data));   // ⬅️ persist
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await axios.post('http://localhost:8087/api/users/register', userData);
      setCurrentUser(data);
      localStorage.setItem('user', JSON.stringify(data));   // ⬅️ persist
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');                        // ⬅️ clear
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
