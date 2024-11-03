import React from 'react';

const Card = ({ title, icon: Icon, color, description, onClick }) => (
  <div onClick={onClick} className="group cursor-pointer p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: color.background }}>
    <div className="relative">
      <div className="absolute top-0 right-0 w-16 h-16" style={{ backgroundColor: color.overlay, opacity: 0.2, transform: 'rotate(45deg) translateY(-8px) translateX(8px)' }} />
      <div className="relative z-10 space-y-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-transform group-hover:rotate-12" style={{ backgroundColor: color.iconBg }}>
          <Icon className="w-8 h-8" style={{ color: color.icon }} />
        </div>
        <h3 className="text-xl font-bold text-center" style={{ color: color.text }}>{title}</h3>
        {description && (
          <div className="flex justify-center">
            <span className="text-sm opacity-80 group-hover:opacity-100 font-semibold" style={{ color: color.text }}>{description}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Card;
