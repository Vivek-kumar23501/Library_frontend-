import React, { useState, useEffect } from "react";

const SimpleCarousel = () => {
  const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];
  const mobileBoxes = [
    "Explore new knowledge every day.",
    "Libraries are the gateways to imagination.",
    "Reading today shapes tomorrow.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= (isMobile ? mobileBoxes.length : images.length) ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? (isMobile ? mobileBoxes.length - 1 : images.length - 1) : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % (isMobile ? mobileBoxes.length : images.length)
    );
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
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isMobile ? (
        // Mobile: Show box slider
        <div
          style={{
            width: "90%",
            padding: "40px",
            borderRadius: "15px",
            backgroundColor: "#f0f8ff",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            minHeight: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "500",
            color: "#333",
          }}
        >
          "{mobileBoxes[currentIndex]}"
        </div>
      ) : (
        // Desktop: Show image slider
        <img
          src={images[currentIndex]}
          alt="slider"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
            backgroundColor: "#fff",
          }}
        />
      )}

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
