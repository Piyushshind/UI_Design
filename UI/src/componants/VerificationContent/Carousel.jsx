"use client";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/carousel_image1.jpg",
      alt: "Verification Illustration 1",
      legend:
        "Make sure you are in a well-lit, quiet place that is not in direct sunlight.",
    },
    {
      image: "/assets/carousel_image2.jpg",
      alt: "Verification Illustration 2",
      legend:
        "Ensure your face is clearly visible and centered within the camera frame.",
    },
    {
      image: "/assets/carousel_image3.jpg",
      alt: "Verification Illustration 3",
      legend: "Avoid covering your face with sunglasses, a hat, or a mask.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.carouselContainer}>
      <div
        className={styles.slideTrack}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <article key={index} className={styles.slide}>
            <img
              src={slide.image}
              alt={slide.alt}
              className={styles.slideImage}
            />
            <p className={styles.legend}>{slide.legend}</p>
          </article>
        ))}
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
