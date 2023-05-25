import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // state to store the loading status
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <>...Loading</>
  ) : isAuthenticated ? (
    children
  ) : (
    <Navigate to="/account/login" />
  );
};

export default ProtectedRoute;