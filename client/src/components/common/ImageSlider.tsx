import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-3.jpg?v=1657101767",
    "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-5.jpg?v=1657101855",
    "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-1.jpg?v=1657101879",
    "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-4.jpg?v=1657101908",
    "https://cdn.shopify.com/s/files/1/0136/8467/0523/files/categories-2.jpg?v=1657101941",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-2/3">
        <div className="relative">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="absolute inset-0 mx-2 md:mx-4 rounded-lg shadow-lg"
              style={{
                transform: `translateX(${index * 25}%)`,
                transition: "transform 0.3s ease-in-out",
              }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900"
            onClick={prevSlide}
          >
            Previous
          </button>
          <button
            className="px-2 py-1 text-sm text-gray-600 hover:text-gray-900"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
