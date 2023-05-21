import "./App.scss";

import { Routes, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import ProtectRoute from "./components/common/ProtectRoute";
import Dashboard from "./components/common/Dashboard";
import HomePage from "./pages/HomePage";
import SignIn from "./components/common/SignIn";
import SignUp from "./components/common/SignUp";
import { withCookies } from "react-cookie";
import ProductPage from "./pages/ProductCatalogPage";
import "normalize.css";
import ProductDetailPage from "./pages/ProductDetailPage";
import VerifyEmail from "./components/common/VerifyEmail";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route path="/account" element={<AccountPage />}>
          <Route
            index
            element={
              <ProtectRoute>
                <Dashboard />
              </ProtectRoute>
            }
          />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="reset-password" />
        </Route>
      </Routes>
    </>
  );
}

export default withCookies(App);
