import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BottomNavigation from "../common/BottomNavigation";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavigation />
      <Footer />
    </>
  );
};

export default MainLayout;
