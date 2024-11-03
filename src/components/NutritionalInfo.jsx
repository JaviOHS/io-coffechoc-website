import React, { useState } from 'react';
import { Flame, Cookie, Coffee, Weight, Wheat, Bone, ScrollText, Activity } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Card from './Card';
import BaseModal from './BaseModal';
import NavigationControls from './NavigationControls';
import usePagination from '../hooks/usePagination';
import DecorativeBackground from './DecorativeBackground';

const getIconComponent = (iconName) => {
  const icons = {
    Fire: Flame,
    Cookie: Cookie,
    Coffee: Coffee,
    Weight: Weight,
    Wheat: Wheat,
    Bone: Bone,
  };
  return icons[iconName] || Cookie;
};

const NutritionalInfo = ({ nutritionalInfo }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const itemsPerPage = 3;
  const { currentIndex, next, prev, setPage, totalPages } = usePagination(nutritionalInfo.content.length, itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = nutritionalInfo.content.slice(startIndex, endIndex);

  return (
    <section id="nutritional_info" className="relative py-16 bg-[#FAF5E4] overflow-hidden" data-aos="fade-in">
      <DecorativeBackground pattern="icons" theme="light" />
      <div className="container mx-auto px-6">
        <SectionTitle iconLeft={ScrollText} iconRight={Activity} color="#4A3C31" title={nutritionalInfo.title} />
        <p className="text-lg text-center mb-12 text-[#4A3C31] max-w-3xl mx-auto">{nutritionalInfo.description}</p>
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {visibleItems.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              const absoluteIndex = startIndex + index;

              return (
                <div key={absoluteIndex} data-aos="fade-in" data-aos-duration="800">
                  <Card
                    title={item.nutrient}
                    icon={IconComponent}
                    color={{ background: '#FFFFFF', overlay: '#FFD7A8', iconBg: '#FFD7A8', icon: '#7D4F3A', text: '#4A3C31' }}
                    description={`Valor Diario: ${item.dailyValue}`}
                    onClick={() => setExpandedIndex(absoluteIndex)}
                  />
                </div>
              );
            })}
          </div>
          <NavigationControls
            currentIndex={currentIndex}
            totalItems={totalPages}
            onPrevious={prev}
            onNext={next}
            onDotClick={setPage}
            buttonColor="#FFD7A8"
            dotColor="#4A3C31"
          />
        </div>
      </div>

      {expandedIndex !== null && (
        <BaseModal
          title={nutritionalInfo.content[expandedIndex].nutrient}
          description={nutritionalInfo.content[expandedIndex].details}
          icon={getIconComponent(nutritionalInfo.content[expandedIndex].icon)}
          color={{
            background: '#FFFFFF',
            iconBg: '#FFD7A8',
            icon: '#7D4F3A',
            text: '#4A3C31',
            buttonBg: '#FFB347',
            buttonText: '#4A3C31',
            closeIcon: 'gray',
          }}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </section>
  );
};

export default NutritionalInfo;
