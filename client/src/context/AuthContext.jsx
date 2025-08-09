import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [cart, setCart] = useState([]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, cart, addToCart }}>
      {children}
    </AuthContext.Provider>
  );
};
