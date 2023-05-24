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
import CustomerProfile from "./components/common/CustomerProfile";

import About from "./components/common/About";

function App() {
  return (
    <>
      {/* <CustomerProfile></CustomerProfile> */}
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
          <Route path="about-us" element={<About />} />
          <Route path="verify-email" />
          <Route path="reset-password" />
          <Route path="customer-profile" element={<CustomerProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default withCookies(App);
