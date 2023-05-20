import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // state to store the loading status
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  return !accessToken || !refreshToken ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
