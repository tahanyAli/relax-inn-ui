import React, { useEffect, useRef } from "react";
import banner2 from "../components/assets/valeriia.jpg";
import banner3 from "../components/assets/Hotel.jpg";
import banner1 from "../components/assets/Hotel3.jpg";
import Form from "./Form";
import "./ImageSlider.css";

const ImageSlider = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const timeRunning = 3000; // Animation duration
  const timeAutoNext = 7000; // Auto next duration

  let runNextAuto;
  let runTimeOut;

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = "none";
      void runningTimeRef.current.offsetHeight; // Trigger reflow
      runningTimeRef.current.style.animation =
        "runningTime 7s linear 1 forwards";
    }
  };

  const showSlider = (type) => {
    if (!listRef.current || !carouselRef.current) return;

    const sliderItemsDom = listRef.current.querySelectorAll(".item");

    if (type === "next") {
      listRef.current.appendChild(sliderItemsDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextButtonRef.current.click();
    }, timeAutoNext);

    resetTimeAnimation();
  };

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;

    const handleNextClick = () => showSlider("next");
    const handlePrevClick = () => showSlider("prev");

    // Add event listeners only if refs are defined
    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNextClick);
      prevButton.addEventListener("click", handlePrevClick);

      // Start the initial auto-slide
      runNextAuto = setTimeout(() => {
        nextButton.click();
      }, timeAutoNext);

      resetTimeAnimation();
    }

    return () => {
      // Remove event listeners only if refs are still defined
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNextClick);
        prevButton.removeEventListener("click", handlePrevClick);
      }
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        <div className="item" style={{ backgroundImage: `url(${banner1})` }}>
          <div className="content">
            <div className="name">Explore your destination with us.</div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${banner2})` }}>
          <div className="content">
            <div className="name">
              Enjoy unforgettable experiences in dream hotels.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${banner3})` }}>
          <div className="content">
            <div className="name">
              Enjoy an extraordinary retreat with exclusive offers.
            </div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button
          className="prev"
          ref={prevButtonRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>
        <button
          className="next"
          ref={nextButtonRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
          >
            <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
      <Form />
    </div>
  );
};

export default ImageSlider;
