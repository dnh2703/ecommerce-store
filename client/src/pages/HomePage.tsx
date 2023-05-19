import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carosel from "../components/common/Carousel";
import ImageSlider from "../components/common/ImageSlider";

const HomePage = () => {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Carosel /> */}
      <ImageSlider />
      {/* <Footer></Footer> */}
    </>
  );
};

export default HomePage;
