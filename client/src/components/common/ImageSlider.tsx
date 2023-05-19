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

  return <div className="flex items-center justify-center">Image slider</div>;
};

export default ImageSlider;
