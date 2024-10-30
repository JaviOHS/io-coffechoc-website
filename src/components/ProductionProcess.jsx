import { useState } from 'react';
import { Coffee, ChevronRight, Factory, PackageCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';
import DecorativeBackground from './DecorativeBackground';

const PhaseCard = ({ phase, index, isActive, onClick }) => {
  return (
    <div onClick={onClick} className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'scale-100 z-10' : 'scale-95 opacity-75 hover:opacity-90'}`}>
      <div className="bg-[#3B2A20] rounded-2xl shadow-xl p-6 h-full">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D9C56E] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-[#3B2A20] text-xl font-bold">{index + 1}</span>
        </div>
        <div className="mt-4 space-y-4">
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <img src={phase.imgUrl} alt={phase.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A20] to-transparent opacity-50" />
          </div>
          <h3 className="text-xl font-bold text-[#D9C56E] flex items-center gap-2">
            {phase.title}
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
          </h3>
          <p className={`text-gray-200 leading-relaxed transition-all duration-500 ${isActive ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
            {phase.description}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl">
          <div className="absolute transform rotate-45 bg-[#D9C56E] opacity-10 w-16 h-16 translate-y-8 translate-x-8" />
        </div>
      </div>
    </div>
  );
};

const ProductionProcess = ({ productionProcess }) => {
  const { description, phasesTitle, phases, conclusion } = productionProcess;
  const [activePhase, setActivePhase] = useState(null);

  return (
    <section id="production_process" className="relative py-16 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-hidden">
      <DecorativeBackground pattern="production" theme="dark"/>
      <div className="container mx-auto px-4">
        <SectionTitle iconLeft={Factory} iconRight={Coffee} color="#e5dbaf" title={phasesTitle} />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {description}
        </p>
        <div className="hidden lg:block absolute left-1/2 top-1/3 bottom-1/3 w-1 bg-[#D9C56E] opacity-20 transform -translate-x-1/2" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
          {phases.map((phase, index) => (
            <PhaseCard
              key={index}
              phase={phase}
              index={index}
              isActive={activePhase === index}
              onClick={() => setActivePhase(activePhase === index ? null : index)}
            />
          ))}
        </div>
        <div className="mt-16 bg-[#3B2A20] rounded-2xl p-8 relative overflow-hidden">
          <PackageCheck className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#D9C56E] opacity-10 w-32 h-32" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-2xl font-bold text-[#D9C56E] mb-4 font-serif">Conclusión</h3>
            <p className="text-gray-200 leading-relaxed">{conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;