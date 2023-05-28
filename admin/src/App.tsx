import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import Login from "./pages/Login";
import NotFoundPage from "./components/common/NotFoundPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import React, { Suspense } from "react";
import LoadingPage from "./components/common/LoadingPage";
const MainLayout = React.lazy(() => import("./components/layout/MainLayout"));

function App() {
  console.log(process.env.REACT_APP_DOMAIN);

  return (
    <div className="App dark bg-gray-900">
      <div className="bg-gray-900 h-full">
        <Routes>
          <Route path="" element={<Login />} />
          <Route
            element={
              <Suspense fallback={<LoadingPage />}>
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              </Suspense>
            }
          >
            {routes}
          </Route>
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/server-error" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
