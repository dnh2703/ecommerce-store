import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carosel from "../components/common/Carousel";
import ImageSlider from "../components/common/ImageSlider";
import BottomNavigation from "../components/common/BottomNavigation";
import TwoImage from "../components/common/TwoImages";
import RoomInspiration from "../components/common/RoomInspiration";
import Testimonials from "../components/common/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <BottomNavigation />
      <Carosel />
      <ImageSlider />
      <TwoImage />
      <RoomInspiration />
      <Testimonials />
      <Footer></Footer>
    </>
  );
};

export default HomePage;
