import { createContext, useState } from 'react';
import { login } from '../services/auth.js';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const loginUser = async (email, password) => {
    const newToken = await login(email, password);
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
