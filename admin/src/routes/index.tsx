import { Route } from "react-router-dom";
import { RouteType } from "./config";
import { ReactNode } from "react";
import appRoutes from "./appRoutes";
import ProtectedRoute from "../components/common/ProtectedRoute";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route
      path={route.path}
      element={<ProtectedRoute>{route.element}</ProtectedRoute>}
      key={index}
    >
      {route.child && generateRoute(route.child)}
    </Route>
  ));
};

export const routes: ReactNode = generateRoute(appRoutes);
