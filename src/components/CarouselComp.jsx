import React, { useState, useEffect } from "react";

const SimpleCarousel = () => {
  const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        margin: "20px auto",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff", // white background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "100%",
          height: "550px",
          objectFit: "contain", // full image fits
          backgroundColor: "#fff", // white background behind image
        }}
      />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SimpleCarousel;
