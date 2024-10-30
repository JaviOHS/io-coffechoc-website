import React, { useState } from 'react';
import { Target, ChevronRight, Award, BarChart, Presentation } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ContainerCard from './ContainerCard';
import DecorativeBackground from './DecorativeBackground';

const ObjectiveCard = ({ title, descriptions, isActive, icon: Icon }) => (
  <ContainerCard isActive={isActive} decoratorPosition="bottom-left">
    <div className="relative">
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <Icon size={128} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-[#D9C56E] w-6 h-6" />
          <h3 className="text-2xl font-bold text-[#D9C56E] font-serif">{title}</h3>
        </div>
        <ul className="space-y-3">
          {descriptions.map((desc, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="text-[#D9C56E] w-4 h-4 mt-1 flex-shrink-0" />
              <span className="text-gray-200 leading-relaxed">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </ContainerCard>
);

const Objectives = ({ objectives }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const icons = {
    0: Target,
    1: BarChart,
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-x-hidden">
      <DecorativeBackground pattern="geometricDark" theme="dark" border="striped"/>
      <div className="container mx-auto px-4">
        <SectionTitle iconLeft={Award} iconRight={Presentation} color="#e5dbaf" title={objectives.title} />
        <div className="grid md:grid-cols-2 gap-8">
          {objectives.content.map((objective, index) => (
            <ObjectiveCard
              key={index}
              title={objective.title}
              descriptions={objective.description}
              isActive={activeIndex === index}
              icon={icons[index]}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)} className="group relative overflow-hidden bg-[#D9C56E] text-[#2C1810] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-[#e6d178] transform hover:scale-105">
            <span className="relative z-10">
              {activeIndex === 0 ? 'Ver Objetivos Específicos' : 'Ver Objetivos Generales'}
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
