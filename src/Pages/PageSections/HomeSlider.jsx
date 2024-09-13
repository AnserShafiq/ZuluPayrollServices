import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img2 from '../../Images/home-1.jpg';
import img1mob from '../../Images/home-2-mob.jpg';
import img1 from '../../Images/home-2.jpg';
import { FaCircleChevronRight as Right } from "react-icons/fa6";
import { FaCircleChevronLeft as Left } from "react-icons/fa6";

// Slide container styles
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Individual slide styles with transient prop ($active)
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

// Navigation button styles with transient prop ($left)
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => (props.$left ? 'left: 1.3rem;' : 'right: 1.3rem;')}
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  @media (max-width: 1000px) {
    display: none;
  }

`;

// Pagination bullet container
const PaginationContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

const Bullet = styled.div`
  width: 25px;
  height: 2px;
  border-radius: 5px;
  background-color: ${props => (props.$active ? 'var(--slider-btns-color-two)' : 'var(--slider-btns-color-one)')};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--slider-btns-color-two);
  }
`;

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Handle previous and next slide buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle bullet click to jump to the selected slide
  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SlideContainer>
      <img src={images[0]} alt="" className='h-[80vh] lg:h-[93vh]' style={{ width: '0%' }} />
      {images.map((image, index) => (
        <Slide
          key={index}
          src={image.src}
          $active={index === currentIndex} // Use transient prop $active
        >
          <div className='flex flex-col justify-end lg:justify-center pb-[10%] lg:pb-[0%] w-full h-full z-10 bg-[#0000003f] '>
            <div className='flex flex-col w-[90%] text-center lg:text-left lg:w-[42%] mx-auto lg:ml-[7rem]'>
              <h3 className='text-[1.7rem] lg:text-[2.5rem] font-extrabold text-[var(--sky-blue)] tracking-wider leading-tight uppercase'>{image.head}</h3>
              <h5 className='text-[1rem] leading-tight lg:leading-normal lg:text-[1.5rem] font-[500] capitalize text-[var(--sky-blue)] tracking-wide'>{image.description}</h5>
            </div>
          </div>
        </Slide>
      ))}

      {/* Navigation Buttons */}
      <NavButton $left onClick={handlePrev}>
        <Left className='text-[1.8rem] text-[var(--slider-btns-color-one)] hover:text-[var(--slider-btns-color-two)]' />
      </NavButton>
      <NavButton onClick={handleNext}>
        <Right className='text-[1.8rem] text-[var(--slider-btns-color-one)] hover:text-[var(--slider-btns-color-two)]' />
      </NavButton>

      {/* Pagination Bullets */}
      <PaginationContainer>
        {images.map((_, index) => (
          <Bullet
            key={index}
            $active={index === currentIndex} // Use transient prop $active
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </PaginationContainer>
    </SlideContainer>
  );
};

const HomeSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const images = [
    {
      src: isMobile ? img1mob: img1,
      head: 'Efficient Payroll Solutions For Growing Businesses',
      description: 'Optimize your payroll operations with our efficient solutions designed for growing businesses. We ensure timely, accurate, and hassle-free payroll management, allowing you to focus on scaling your company with confidence.'
    },
    {
      src: img2,
      head: 'Streamline your payroll process with confidence',
      description: 'Effortlessly manage your payroll with precision and confidence. Our streamlined payroll process ensures accuracy, compliance, and efficiency, saving you time while providing peace of mind.'
    }
  ];

  return (
    <div>
      <Slideshow images={images} interval={5000} />
    </div>
  );
};

export default HomeSlider;
