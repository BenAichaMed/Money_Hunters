import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Button from '../common/Button';

const slides = [
    {
      city: 'Ecommerce',
      img: '/Ecommerce.jpg',
      title: 'Ecommerce',
      description: 'Learn how to build and scale your online store with our expert instructors.',
    },
    {
      city: 'Copywriting',
      img: '/copywriting.jpg',
      title: 'Copywriting',
      description: 'Discover the art of writing persuasive copy that drives sales and grows your business.',
    },
    {
      city: 'Trading',
      img: '/trading.jpg',
        title: 'Trading',
        description: 'Master the art of trading and investing with our comprehensive courses and tutorials.',
    },
    // {
    //   city: 'Amsterdam',
    //   country: 'Netherlands',
    //   img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    // },
    // {
    //   city: 'Moscow',
    //   country: 'Russia',
    //   img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    // },
  ];
  
  
const Slider = ({ 
  
  autoPlayInterval = 4000, 
  showControls = true,
  showIndicators = true,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  // Handle slide navigation
  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= slides.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      return nextIndex;
    });
  }, [slides.length]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, paginate]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setIsAutoPlaying(true);
  };

  // Navigation button component
  const NavigationButton = ({ direction, onClick, children }) => (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'}
        p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white
        hover:text-gray-900 transition-all shadow-lg backdrop-blur-sm z-10
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      `}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {children}
    </button>
  );

  return (
    <div 
      className={`w-full relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main slider container */}
      <div className="relative w-full h-[700px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            {/* Slide content */}
            <div className="relative w-full h-full">
              <img
                src={slides[currentIndex].img}
                alt={slides[currentIndex].city}
                className="w-full h-full object-cover"
              />
              {/* Slide overlay with content */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
                <h2 className="text-white text-3xl font-bold mb-2">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-white/90">
                  {slides[currentIndex].description}
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Button variant="primary" size="lg">
            Explore Courses
          </Button>
        </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      {showControls && (
        <>
          <NavigationButton direction="left" onClick={() => paginate(-1)}>
            <HiChevronLeft className="w-6 h-6" />
          </NavigationButton>
          <NavigationButton direction="right" onClick={() => paginate(1)}>
            <HiChevronRight className="w-6 h-6" />
          </NavigationButton>
        </>
      )}

      {/* Slide indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`
                w-2 h-2 rounded-full transition-all
                ${index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/80'}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;