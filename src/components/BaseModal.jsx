import React from 'react';

const BaseModal = ({ title, description, icon: Icon, color, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="relative rounded-2xl max-w-md w-full p-6 shadow-2xl" style={{ backgroundColor: color.background }} data-aos="fade-up" data-aos-duration="400">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: color.iconBg }}>
            <Icon className="w-6 h-6" style={{ color: color.icon }} />
          </div>
          <h3 className="text-2xl font-bold" style={{ color: color.text }}>{title}</h3>
        </div>
        <p style={{ color: color.text }}>{description}</p>
        <div className="pt-4">
          <button onClick={onClose} className="w-full py-3 px-6 rounded-lg transition-all duration-300 font-semibold" style={{ backgroundColor: color.buttonBg, color: color.buttonText }}>
            Comprendo
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BaseModal;
