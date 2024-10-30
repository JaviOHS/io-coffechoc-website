import React from 'react';
import { House, Heart, LeafyGreen, Factory, ScrollText, MessageCircle, Info } from 'lucide-react';

const icons = { House, Heart, LeafyGreen, Factory, ScrollText, MessageCircle, Info };

const MenuItem = ({ name, icon, onClick }) => {
  const IconComponent = icons[icon];
  return (
    <button onClick={onClick} className="flex items-center space-x-2 p-2 text-white hover:bg-amber-400/10 transition-colors">
      {IconComponent && <IconComponent className="w-5 h-5" />}
      <span>{name}</span>
    </button>
  );
};

export default MenuItem;
