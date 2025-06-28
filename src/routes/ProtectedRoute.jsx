import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { logado } = useContext(AuthContext);

  if (!logado) {
    return <Navigate to="/notLogged" replace />;
  }

  return children;
};

export default ProtectedRoute;
