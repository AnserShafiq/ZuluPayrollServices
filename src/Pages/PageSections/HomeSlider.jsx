import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import home1 from '../../Images/home-1.jpg';
import home2 from '../../Images/home-2.jpg';

const images = [
  home1,
  home2,
  // Add more images if needed
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel w-full relative">
      <TransitionGroup className="carousel-inner">
        <CSSTransition
          key={currentIndex}
          timeout={300}
          classNames="fade"
        >
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="w-full object-cover h-[80vh]"
          />
        </CSSTransition>
      </TransitionGroup>

      {/* Previous and Next buttons */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-[50%] transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-[50%] transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default HomeSlider;
