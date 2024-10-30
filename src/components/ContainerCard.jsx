import React from 'react';

const ContainerCard = ({ children, isActive = true, decoratorPosition = "top-right" }) => (
  <div className={`group relative overflow-hidden bg-[#3B2A20] rounded-2xl p-6 shadow-xl transition-transform duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'} hover:scale-[1.02]`}>
    {children}
    <div className={`absolute w-16 h-16 overflow-hidden ${decoratorPosition === "top-right" ? "top-0 right-0" : "bottom-0 left-0"}`}>
      <div className={`absolute ${decoratorPosition === "top-right" ? "rotate-45 -translate-y-8 translate-x-8" : "-rotate-45 translate-y-8 -translate-x-8"} bg-[#D9C56E] opacity-20 w-16 h-16`} />
    </div>
  </div>
);

export default ContainerCard;
