import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carosel from "../components/common/Carousel";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Carosel />

      <Footer></Footer>
    </>
  );
};

export default HomePage;
