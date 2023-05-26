import "./App.scss";

import { Routes, Route, Navigate } from "react-router-dom";
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
import CustomerProfile from "./components/common/CustomerProfile";

import CartPage from "./pages/CartPage";
import VerifyEmail from "./components/common/VerifyEmail";
import CheckoutPage from "./pages/CheckoutPage";
import MainLayout from "./components/layout/MainLayout";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import ResetPassword from "./components/common/ResetPassword";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/products/:id" element={<ProductDetailPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
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
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="customer-profile" element={<CustomerProfile />} />
          </Route>
        </Route>
        <Route path="/check-out/:process" element={<CheckoutPage />}></Route>
        <Route
          path="/check-out"
          element={<Navigate replace to="/check-out/information"></Navigate>}
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default withCookies(App);
