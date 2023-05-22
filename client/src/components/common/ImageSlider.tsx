// import React, { useRef, useState } from "react";

// const ImageSlider = () => {
//   const images = [
//     "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-3.jpg?v=1657101767",
//     "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-5.jpg?v=1657101855",
//     "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-1.jpg?v=1657101879",
//     "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-4.jpg?v=1657101908",
//     "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-2.jpg?v=1657101941",
//   ];
//   const sliderRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   const handleMouseDown = (e: any) => {
//     setIsDragging(true);
//     setStartX(e.pageX - sliderRef.current.offsetLeft);
//     setScrollLeft(sliderRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e: any) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - sliderRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     sliderRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       ref={sliderRef}
//       className="max-w-full overflow-hidden whitespace-nowrap"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index + 1}`}
//           className="inline-block w-[100%/2] h-auto object-cover mx-2"
//         />
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default () => {
  // const images = [
  //   "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-3.jpg?v=1657101767",
  //   "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-5.jpg?v=1657101855",
  //   "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-1.jpg?v=1657101879",
  //   "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-4.jpg?v=1657101908",
  //   "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-2.jpg?v=1657101941",
  // ];
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
      <h2 className="text-center py-10 text-5xl text-white">
        Shop by Department
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
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
              <img
                className="hover:animate-[buy_1s_linear]"
                src={img.url}
                alt=""
              />
              <h3 className="text-center pb-5 text-white hover:text-amber-800">
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
