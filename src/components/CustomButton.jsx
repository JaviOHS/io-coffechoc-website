import React from 'react';

function CustomButton({ text, icon: Icon, type = 'primary', onClick }) {
  const primaryStyles = "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700";
  const secondaryStyles = "bg-white/10 text-white hover:bg-white/20";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
        type === 'primary' ? primaryStyles : secondaryStyles
      }`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {text}
    </button>
  );
}

export default CustomButton;
