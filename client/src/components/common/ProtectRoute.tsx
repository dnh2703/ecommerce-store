import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import authApi from "../../api/authApi";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // state to store the loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authApi
      .jwtAuth()
      .then((res) => {
        setIsAuthenticated(true);
        // set isLoading to false
        setIsLoading(false);
      })
      .catch((err) => {
        setIsAuthenticated(false);
        // set isLoading to false
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <>...Loading</>
  ) : isAuthenticated ? (
    children
  ) : (
    <Navigate to="/account/login" />
  );
};

export default ProtectedRoute;
