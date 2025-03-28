import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { useRecoilValue } from "recoil";
import { languageData } from "../../recoil/LanguageData/translations";
import { languageState } from "../../recoil/atom";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const selectedLanguage = useRecoilValue(languageState);
  const translations = languageData[selectedLanguage];

  const slides = [
    {
      image: `${import.meta.env.VITE_APP_ASSETS_PATH}carousel_image1.jpg`,
      alt: "Verification Illustration 1",
      legend: translations.lightingMessage
    },
    {
      image: `${import.meta.env.VITE_APP_ASSETS_PATH}carousel_image2.jpg`,
      alt: "Verification Illustration 2",
      legend: translations.faceVisibleMessage
    },
    {
      image: `${import.meta.env.VITE_APP_ASSETS_PATH}carousel_image3.jpg`,
      alt: "Verification Illustration 3",
      legend: translations.avoidCoveringFace
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
