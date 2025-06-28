import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);

  const isTokenValid = (token) => {
    try {
      const { exp } = jwtDecode(token);
      const now = Date.now() / 1000;
      return exp > now;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isTokenValid(token)) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setLogado(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
