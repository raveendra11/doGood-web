import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:8080';       // optional: centralize
axios.defaults.withCredentials = true;                // uncomment if backend uses cookies/sessions

const AuthContext = createContext();
export function useAuth() { return useContext(AuthContext); }
const INACTIVITY_TIMEOUT_MS = 5 * 60 * 1000;
const INACTIVITY_CHECK_INTERVAL_MS = 10 * 1000;
const ACTIVITY_EVENTS = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
const PASSIVE_EVENT_OPTIONS = { passive: true };
const getEventOptions = (eventName) => (
  eventName === 'scroll' || eventName === 'touchstart' ? PASSIVE_EVENT_OPTIONS : undefined
);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const lastActivityRef = useRef(Date.now());
  const navigate = useNavigate();

  // ⬇️ Load user on refresh
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setCurrentUser(JSON.parse(stored));
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('https://api.wedogood.help/api/login', { email, password });
      //const { data } = await axios.post('http://localhost:8080/api/login', { email, password });
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
      const { data } = await axios.post('https://api.wedogood.help/api/register', userData);
      //const { data } = await axios.post('http://localhost:8080/api/register', userData);
      setCurrentUser(data);
      localStorage.setItem('user', JSON.stringify(data));   // ⬅️ persist
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = useCallback(() => {
    setCurrentUser(null);
    localStorage.removeItem('user');                        // ⬅️ clear
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    if (!currentUser) return undefined;

    const markActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const inactivityCheckInterval = setInterval(() => {
      if (Date.now() - lastActivityRef.current >= INACTIVITY_TIMEOUT_MS) {
        clearInterval(inactivityCheckInterval);
        logout();
      }
    }, INACTIVITY_CHECK_INTERVAL_MS);

    ACTIVITY_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, markActivity, getEventOptions(eventName));
    });

    markActivity();

    return () => {
      clearInterval(inactivityCheckInterval);
      ACTIVITY_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, markActivity, getEventOptions(eventName));
      });
    };
  }, [currentUser, logout]);

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
