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
<<<<<<< HEAD
import CustomerProfile from "./components/common/CustomerProfile";

import About from "./components/common/About";
=======
import CartPage from "./pages/CartPage";
import VerifyEmail from "./components/common/VerifyEmail";
import CheckoutPage from "./pages/CheckoutPage";
>>>>>>> 0cf39aec35d33a52fe30c3ef87ba1636fd69a7ab

function App() {
  return (
    <>
      {/* <CustomerProfile></CustomerProfile> */}
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
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
<<<<<<< HEAD
          <Route path="about-us" element={<About />} />
          <Route path="verify-email" />
=======
          <Route path="verify-email" element={<VerifyEmail />} />
>>>>>>> 0cf39aec35d33a52fe30c3ef87ba1636fd69a7ab
          <Route path="reset-password" />
          <Route path="customer-profile" element={<CustomerProfile />} />
        </Route>
        <Route path="/check-out/:process" element={<CheckoutPage />}></Route>
        <Route
          path="/check-out"
          element={<Navigate replace to="/check-out/information"></Navigate>}
        ></Route>
      </Routes>
    </>
  );
}

export default withCookies(App);
