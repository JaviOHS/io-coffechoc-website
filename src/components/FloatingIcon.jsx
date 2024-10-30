import React from 'react';

function FloatingIcon({ icon: Icon, positionClasses, animationClasses }) {
  return (
    <div className={`absolute p-4 bg-white/10 backdrop-blur-md rounded-lg ${positionClasses} ${animationClasses}`}>
      <Icon className="w-6 h-6 text-amber-400" />
    </div>
  );
}

export default FloatingIcon;
