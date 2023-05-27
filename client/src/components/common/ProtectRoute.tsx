import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // state to store the loading status
  const refreshToken = Cookies.get("refreshToken");

  return !refreshToken ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
