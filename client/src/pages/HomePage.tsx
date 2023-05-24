import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carosel from "../components/common/Carousel";
import ImageSlider from "../components/common/ImageSlider";
import BottomNavigation from "../components/common/BottomNavigation";
import TwoImage from "../components/common/TwoImages";
import RoomInspiration from "../components/common/RoomInspiration";
import Testimonials from "../components/common/Testimonials";
import TopRating from "../components/common/TopRating";

const HomePage = () => {
  return (
    <>
      <BottomNavigation />
      <Carosel />
      <ImageSlider />
      <TwoImage />
      <TopRating />
      <RoomInspiration />
      <Testimonials />
    </>
  );
};

export default HomePage;
