import React from 'react';

const SectionTitle = ({ iconLeft: IconLeft, iconRight: IconRight, color, title }) => (
  <div className="flex items-center justify-center gap-4 mb-12">
    {IconLeft && <IconLeft style={{ color }} className="w-8 h-8" />}
    <h2 style={{ color }} className="text-4xl font-bold text-center font-serif">{title}</h2>
    {IconRight && <IconRight style={{ color }} className="w-8 h-8" />}
  </div>
);

export default SectionTitle;
