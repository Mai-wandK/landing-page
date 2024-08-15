import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 left-4 z-50 bg-red-600 bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={24} className='animate-bounce'/>
    </button>
  );
};

export default ScrollToTopButton;
