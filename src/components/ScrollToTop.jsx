import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#D9C56E] hover:bg-[#cab244] text-brown-900 
        rounded-full p-3 shadow-lg transition-all duration-300 z-50
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}

export default ScrollToTop;