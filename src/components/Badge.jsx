import React from 'react';

function Badge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-900/30 text-amber-200 text-sm">
      <Icon className="w-4 h-4 mr-2" />
      {text}
    </span>
  );
}

export default Badge;
