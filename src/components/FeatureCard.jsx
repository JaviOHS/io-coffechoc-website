import React from 'react';

function FeatureCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 text-amber-200">
      <div className="p-2 rounded-lg bg-amber-900/30">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-amber-200/70">{subtitle}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
