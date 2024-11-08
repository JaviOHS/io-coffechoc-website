import React, { useState } from 'react';
import { Battery, Brain, Heart, Shield, Smile, Newspaper, HeartPulse } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import BaseModal from '../components/BaseModal';
import DecorativeBackground from '../components/DecorativeBackground';

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
    <section id="benefits" className="relative py-16 bg-[#FAF5E4] overflow-hidden" data-aos="fade-in">
      <DecorativeBackground pattern="geometricLight" theme="light" />
      <div className="container mx-auto px-6" data-aos="zoom-in">
        <SectionTitle iconLeft={Newspaper} iconRight={HeartPulse} color="#4A3C31" title={benefits.title} />
        <p className="text-lg text-[#4A3C31] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {benefits.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {benefits.content.map((benefit, index) => (
            <Card
              key={index}
              title={benefit.title}
              icon={iconMap[benefit.iconKey] || Battery}
              color={{
                background: '#FFFFFF',
                overlay: '#FFD7A8',
                iconBg: '#FFD7A8',
                icon: '#7D4F3A',
                text: '#4A3C31',
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
            background: '#FFFFFF',
            iconBg: '#FFD7A8',
            icon: '#7D4F3A',
            text: '#4A3C31',
            buttonBg: '#FFB347',
            buttonText: '#4A3C31',
            closeIcon: 'gray',
          }}
          onClose={() => setSelectedBenefit(null)}
        />
      )}
    </section>
  );
};

export default Benefits;
