import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <span>Carregando....</span>;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
