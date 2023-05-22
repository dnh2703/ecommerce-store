import { useState } from "react";

const Carosel = () => {
  const slides = [
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/slider-1.jpg?v=1656490821",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/slider-2.jpg?v=1656490833",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/slider-3_1296x.jpg?v=1656490844",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative max-w-full h-[780px] w-full m-auto pt-16">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 rounded-full text-2xl p-2 bg-black/20 text-white cursor-pointer">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            onClick={prevSlide}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 rounded-full text-2xl p-2 bg-black/20 text-white cursor-pointer">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            onClick={nextSlide}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Carosel;
