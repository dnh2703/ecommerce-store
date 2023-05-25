import { Route } from "react-router-dom";
import { RouteType } from "./config";
import { ReactNode, Suspense } from "react";
import appRoutes from "./appRoutes";
import LoadingPage from "../components/common/LoadingPage";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route
      path={route.path}
      element={<Suspense fallback={<LoadingPage />}>{route.element}</Suspense>}
      key={index}
    >
      {route.child && generateRoute(route.child)}
    </Route>
  ));
};

export const routes: ReactNode = generateRoute(appRoutes);
