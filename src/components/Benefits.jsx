import React, { useState } from 'react';
import { Battery, Brain, Heart, Shield, Smile, Newspaper, HeartPulse } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Card from './Card';
import BaseModal from './BaseModal';
import DecorativeBackground from './DecorativeBackground';

const iconMap = {
  energy: Battery,
  focus: Brain,
  heart: Heart,
  immune: Shield,
  mood: Smile,
};

const Benefits = ({ benefits }) => {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  return (
    <section id="benefits" className="relative py-16 bg-gradient-to-br from-[#E7D5C2] to-[#d4b69c] overflow-hidden">
      <DecorativeBackground pattern="geometricLight" theme="light" />
      <div className="container mx-auto px-4">
        <SectionTitle iconLeft={Newspaper} iconRight={HeartPulse} color="#3B2A20" title={benefits.title} />
        <p className="text-lg text-[#2C1810] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {benefits.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.content.map((benefit, index) => (
            <Card
              key={index}
              title={benefit.title}
              icon={iconMap[benefit.iconKey] || Battery}
              color={{
                background: '#3B2A20',
                overlay: '#D9C56E',
                iconBg: '#D9C56E',
                icon: '#3B2A20',
                text: '#D9C56E',
              }}
              description="Click para más información"
              onClick={() => setSelectedBenefit(benefit)}
            />
          ))}
        </div>
      </div>
      {selectedBenefit && (
        <BaseModal
          title={selectedBenefit.title}
          description={selectedBenefit.description}
          icon={iconMap[selectedBenefit.iconKey] || Battery}
          color={{
            background: '#3B2A20',
            iconBg: '#D9C56E',
            icon: '#3B2A20',
            text: '#D9C56E',
            buttonBg: '#D9C56E',
            buttonText: '#3B2A20',
            closeIcon: 'gray',
          }}
          onClose={() => setSelectedBenefit(null)}
        />
      )}
    </section>
  );
};

export default Benefits;
