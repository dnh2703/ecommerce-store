// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default () => {
  const images = [
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-3.jpg?v=1657101767",
      text: "Bedroom",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-5.jpg?v=1657101855",
      text: "Lighting",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-1.jpg?v=1657101879",
      text: "Light Buld",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-4.jpg?v=1657101908",
      text: "Living Room",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-2.jpg?v=1657101941",
      text: "Outdoor",
    },
  ];

  return (
    <div className=" bg-rose-950">
      <h2 className="text-center py-10 text-3xl md:text-5xl text-white">
        Shop by Department
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation
      >
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i} className=" ">
              <img className=" mb-5" src={img.url} alt="" />
              <h3 className="text-center pb-5 text-white ">
                {img.text}
                <span className="w-full bg-black h-[1px] absolute bottom-[-4px] left-0 group-hover/terms:w-0 duration-300"></span>
              </h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
