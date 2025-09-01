import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Configure axios defaults
  axios.defaults.withCredentials = true;

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:3002/me');
      setUser(response.data.user);
      setError('');
    } catch (error) {
      console.log('Not authenticated:', error.response?.status);
      setUser(null);
      if (error.response?.status !== 401) {
        setError('Failed to check authentication status');
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.post('http://localhost:3002/login', {
        email,
        password
      });
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:3002/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setError('');
      // Redirect to frontend login page
      window.location.href = 'http://localhost:3000/login';
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
