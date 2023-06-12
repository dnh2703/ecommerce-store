import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { removeToken } from "../../utils/setting/config";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // state to store the loading status
  const refreshToken = Cookies.get("refreshToken");
  const accessToken = Cookies.get("accessToken");

  if (!refreshToken || !accessToken) {
    removeToken();
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
