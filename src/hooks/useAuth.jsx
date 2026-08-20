import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setIsLoggedIn(true);
        setUserName(user.name);
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (email, password) => {
    setIsLoading(true);
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find(u => u.email === email && u.password === password);

      if (user) {
        const userData = { name: user.name, email: user.email };
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoggedIn(true);
        setUserName(user.name);
        return { success: true };
      } else {
        const emailExists = storedUsers.some(u => u.email === email);
        if (emailExists) {
          return { error: 'Incorrect password' };
        } else {
          return { error: 'No account found with this email' };
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signup = (name, email, password) => {
    setIsLoading(true);
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (storedUsers.some(u => u.email === email)) {
        return { error: 'Email already registered' };
      }

      const newUser = { name, email, password };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      const userData = { name, email };
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUserName(name);
      return { success: true };
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = (email) => {
    setIsLoading(true);
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find(u => u.email === email);

      if (user) {
        return { success: true };
      } else {
        return { error: 'No account found with this email' };
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
  };

  return {
    isLoggedIn,
    userName,
    isLoading,
    login,
    signup,
    forgotPassword,
    logout,
  };
};