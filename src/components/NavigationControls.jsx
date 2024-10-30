import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationControls = ({ 
  currentIndex, 
  totalItems, 
  onPrevious, 
  onNext, 
  onDotClick,
  buttonColor = '#D9C56E',
  dotColor = '#D9C56E',
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 my-4 ${className}`}>
      <div className="flex gap-4">
        <button 
          onClick={onPrevious} 
          style={{ backgroundColor: buttonColor }} 
          className="p-2 rounded-full text-[#3B2A20] hover:bg-opacity-75 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={onNext} 
          style={{ backgroundColor: buttonColor }}
          className="p-2 rounded-full text-[#3B2A20] hover:bg-opacity-75 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            style={{
              backgroundColor: dotColor,
              width: currentIndex === index ? '1.5rem' : '0.5rem',
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
            aria-label={`Ir a item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationControls;
