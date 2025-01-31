import React, { useState, useRef } from "react";
import "./ImageCarousel.css";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../../assets/108-pics", false, /\.(png|jpe?g|svg)$/)
);

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Reference to the carousel container

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    if (carouselRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        carouselRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div
        className="carousel-slide"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        {">"}
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      {/* Fullscreen Button */}
      <button className="fullscreen-button" onClick={toggleFullscreen}>
        ⛶
      </button>
    </div>
  );
};

export default ImageCarousel;
